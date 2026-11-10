// Mesure d'audience maison, sans cookie.
// Envoie une ligne par page vue à /api/collect. Aucune donnée personnelle n'est stockée côté navigateur.
(function () {
  try {
    var host = location.hostname;
    // Pas de mesure en local, ni si la propriétaire a exclu ce navigateur depuis la page admin.
    if (location.protocol === 'file:' || host === 'localhost' || host === '127.0.0.1') return;
    if (localStorage.getItem('ad-notrack') === '1') return;
  } catch (e) { /* stockage bloqué : on mesure quand même */ }

  var first = false;
  try {
    // Première page de l'onglet = nouvelle visite.
    if (!sessionStorage.getItem('ad-visit')) { sessionStorage.setItem('ad-visit', '1'); first = true; }
  } catch (e) { first = true; }

  var ref = '';
  try { if (document.referrer && new URL(document.referrer).hostname !== host) ref = document.referrer; } catch (e) {}

  var data = JSON.stringify({
    p: location.pathname,
    r: ref,
    w: window.innerWidth || screen.width || 0,
    v: first ? 1 : 0
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/collect', new Blob([data], { type: 'text/plain' }));
  } else {
    fetch('/api/collect', { method: 'POST', body: data, keepalive: true }).catch(function () {});
  }
})();
