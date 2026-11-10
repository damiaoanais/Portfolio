// Accès à Upstash Redis par son API REST (aucune dépendance npm).
// Variables posées automatiquement par l'intégration Upstash de Vercel,
// avec ou sans préfixe personnalisé (ex. MY_PREFFIX_KV_REST_API_URL).
function env(suffix) {
  const key = Object.keys(process.env).find(k => k === suffix || k.endsWith('_' + suffix));
  return key ? process.env[key] : undefined;
}
const URL_ = env('KV_REST_API_URL') || env('UPSTASH_REDIS_REST_URL');
const TOKEN = env('KV_REST_API_TOKEN') || env('UPSTASH_REDIS_REST_TOKEN');

async function pipeline(commands) {
  if (!URL_ || !TOKEN) throw new Error('Base Redis non configurée');
  const res = await fetch(URL_.replace(/\/$/, '') + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands)
  });
  if (!res.ok) throw new Error('Redis HTTP ' + res.status);
  const out = await res.json();
  return out.map(r => (r && 'result' in r ? r.result : null));
}

// Date du jour à Paris, au format AAAA-MM-JJ.
function day(offset = 0) {
  const d = new Date(Date.now() - offset * 86400000);
  return d.toLocaleDateString('sv-SE', { timeZone: 'Europe/Paris' });
}

module.exports = { pipeline, day };
