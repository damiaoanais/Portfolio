// Enregistre une page vue. Sans cookie : le visiteur est reconnu par une empreinte
// (adresse IP + navigateur + sel du jour) hachée, jamais stockée en clair et renouvelée chaque jour.
const crypto = require('crypto');
const { pipeline, day } = require('./_redis');

const KEEP = 60 * 60 * 24 * 400; // 400 jours
const PAGES = ['/', '/index.html', '/projets.html', '/outils.html', '/competences.html'];
const CLICKS = ['Me contacter (menu)', 'Me contacter (accueil)', 'E-mail', 'GitHub'];
const BOT =/bot|crawl|spider|slurp|headless|lighthouse|preview|monitor|curl|wget|python|node-fetch/i;

function device(ua, w) {
  if (/ipad|tablet|kindle|silk|playbook/i.test(ua) || (/android/i.test(ua) && !/mobile/i.test(ua))) return 'Tablette';
  if (/mobi|iphone|ipod|android|phone/i.test(ua)) return 'Mobile';
  if (w && w < 768) return 'Mobile';
  return 'Ordinateur';
}

function browser(ua) {
  if (/edg\//i.test(ua)) return 'Edge';
  if (/opr\/|opera/i.test(ua)) return 'Opera';
  if (/samsungbrowser/i.test(ua)) return 'Samsung Internet';
  if (/firefox|fxios/i.test(ua)) return 'Firefox';
  if (/chrome|crios/i.test(ua)) return 'Chrome';
  if (/safari/i.test(ua)) return 'Safari';
  return 'Autre';
}

function os(ua) {
  if (/iphone|ipad|ipod/i.test(ua)) return 'iOS';
  if (/android/i.test(ua)) return 'Android';
  if (/windows/i.test(ua)) return 'Windows';
  if (/mac os x|macintosh/i.test(ua)) return 'macOS';
  if (/cros/i.test(ua)) return 'ChromeOS';
  if (/linux/i.test(ua)) return 'Linux';
  return 'Autre';
}

function source(ref) {
  if (!ref) return 'Accès direct';
  try {
    const h = new URL(ref).hostname.replace(/^www\./, '');
    if (/linkedin|lnkd\.in/.test(h)) return 'LinkedIn';
    if (/google\./.test(h)) return 'Google';
    if (/github/.test(h)) return 'GitHub';
    if (/instagram/.test(h)) return 'Instagram';
    if (/facebook|fb\.com/.test(h)) return 'Facebook';
    if (/(^|\.)t\.co$|twitter|x\.com/.test(h)) return 'X / Twitter';
    if (/bing\./.test(h)) return 'Bing';
    return h.slice(0, 60);
  } catch (e) { return 'Accès direct'; }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).end(); return; }
  const ua = String(req.headers['user-agent'] || '');
  if (!ua || BOT.test(ua)) { res.status(204).end(); return; }

  let b = req.body;
  try { if (typeof b === 'string') b = JSON.parse(b); } catch (e) { b = null; }
  if (!b || typeof b !== 'object') { res.status(400).end(); return; }

  // Clic sur un bouton ou lien de contact : compté à part, ne compte pas comme page vue.
  if (b.e === 'click') {
    if (!CLICKS.includes(b.k)) { res.status(400).end(); return; }
    const d = day();
    try { await pipeline([['HINCRBY', 'clk:' + d, b.k, 1], ['EXPIRE', 'clk:' + d, KEEP]]); res.status(204).end(); }
    catch (e) { res.status(500).json({ error: 'stockage indisponible' }); }
    return;
  }

  let path = String(b.p || '/').split('?')[0];
  if (path === '/index.html') path = '/';
  if (!PAGES.includes(path) && !PAGES.includes(path + '.html')) path = 'Autre';
  else if (!path.endsWith('.html') && path !== '/') path += '.html';

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || (req.socket && req.socket.remoteAddress) || '';
  const d = day();
  const secret = process.env.ANALYTICS_SALT || process.env.ADMIN_PASSWORD || 'portfolio';
  const visitor = crypto.createHash('sha256').update(d + '|' + secret + '|' + ip + '|' + ua).digest('hex').slice(0, 24);
  const country = String(req.headers['x-vercel-ip-country'] || '').toUpperCase().slice(0, 2) || '??';

  const cmds = [
    ['INCR', 'pv:' + d],
    ['PFADD', 'uv:' + d, visitor],
    ['HINCRBY', 'page:' + d, path, 1],
    ['HINCRBY', 'dev:' + d, device(ua, Number(b.w) || 0), 1],
    ['HINCRBY', 'br:' + d, browser(ua), 1],
    ['HINCRBY', 'os:' + d, os(ua), 1],
    ['HINCRBY', 'ctry:' + d, country, 1]
  ];
  if (b.v) {
    cmds.push(['INCR', 'vis:' + d], ['HINCRBY', 'ref:' + d, source(String(b.r || '')), 1]);
  }
  ['pv', 'uv', 'page', 'dev', 'br', 'os', 'ctry', 'vis', 'ref'].forEach(k => cmds.push(['EXPIRE', k + ':' + d, KEEP]));

  try { await pipeline(cmds); res.status(204).end(); }
  catch (e) { res.status(500).json({ error: 'stockage indisponible' }); }
};
