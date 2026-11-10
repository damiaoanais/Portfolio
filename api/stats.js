// Renvoie les statistiques agrégées. Réservé à l'admin : mot de passe dans la variable ADMIN_PASSWORD.
const crypto = require('crypto');
const { pipeline, day } = require('./_redis');

function allowed(req) {
  const pass = process.env.ADMIN_PASSWORD;
  if (!pass) return false;
  const given = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  const a = crypto.createHash('sha256').update(given).digest();
  const b = crypto.createHash('sha256').update(pass).digest();
  return crypto.timingSafeEqual(a, b);
}

const HASHES = { page: 'pages', dev: 'devices', br: 'browsers', os: 'os', ctry: 'countries', ref: 'sources' };

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (!allowed(req)) { res.status(401).json({ error: 'Mot de passe incorrect' }); return; }

  const days = Math.min(Math.max(parseInt(req.query.days, 10) || 30, 1), 365);
  const dates = [];
  for (let i = days - 1; i >= 0; i--) dates.push(day(i));

  const cmds = [];
  dates.forEach(d => cmds.push(['GET', 'pv:' + d], ['GET', 'vis:' + d], ['PFCOUNT', 'uv:' + d]));
  cmds.push(['PFCOUNT', ...dates.map(d => 'uv:' + d)]);
  const names = Object.keys(HASHES);
  dates.forEach(d => names.forEach(n => cmds.push(['HGETALL', n + ':' + d])));

  let r;
  try { r = await pipeline(cmds); }
  catch (e) { res.status(500).json({ error: 'Base de données non configurée ou indisponible' }); return; }

  let i = 0;
  const daily = dates.map(d => ({ date: d, views: +r[i++] || 0, visits: +r[i++] || 0, uniques: +r[i++] || 0 }));
  const uniques = +r[i++] || 0;

  const breakdown = {};
  names.forEach(n => (breakdown[HASHES[n]] = {}));
  dates.forEach(() => names.forEach(n => {
    const h = r[i++] || [];
    const tgt = breakdown[HASHES[n]];
    for (let k = 0; k < h.length; k += 2) tgt[h[k]] = (tgt[h[k]] || 0) + (+h[k + 1] || 0);
  }));

  const sorted = {};
  Object.keys(breakdown).forEach(k => {
    sorted[k] = Object.entries(breakdown[k]).sort((x, y) => y[1] - x[1]).map(([label, value]) => ({ label, value }));
  });

  res.status(200).json({
    days,
    totals: {
      views: daily.reduce((s, x) => s + x.views, 0),
      visits: daily.reduce((s, x) => s + x.visits, 0),
      uniques
    },
    daily,
    ...sorted
  });
};
