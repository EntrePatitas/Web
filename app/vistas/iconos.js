/* VISTA: dibujos reutilizables de la identidad. */
EP.vistas.iconos = (() => {
  const linea = (d) => `<svg viewBox="0 0 24 24" class="icono" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const perro = 'M12,91Q10 91 10,89L10,19.2Q10 17 11.91,18.09L21.4,23.51Q24 25 24,28L24,38Q24 41 27,41L46,41Q49 41 49,38L49,10.4Q49 8 50.75,9.64L63.54,21.63Q65 23 67,23L77,23Q82 23 85.5,26.5L86.88,27.88Q89 30 89,33L89,38Q89 42 85.84,44.46L83.16,46.54Q80 49 80,53L80,89Q80 91 78,91L60,91Q59 91 59,90L59,72.8Q59 72 58.42,71.44L45.86,59.33Q45 58.5 44.14,59.33L31.58,71.44Q31 72 31,72.8L31,90Q31 91 30,91ZM70 29.5a3.3 3.3 0 1 0 .01 0Z';
  const gato = 'M12,91Q10 91 10,89L10,30Q10 26 6.5,26L6,26Q3 26 3,23L3,16Q3 13 6,13L17,13Q23 13 23,19L23,37Q23 41 27,41L43,41Q46 41 46,38L46,10.4Q46 8 47.7,9.7L56.59,18.59Q58 20 60,20L74,20Q76 20 77.41,18.59L86.3,9.7Q88 8 88,10.4L88,37Q88 44 84,48L82.83,49.17Q80 52 80,56L80,89Q80 91 78,91L60,91Q59 91 59,90L59,72.8Q59 72 58.42,71.44L45.86,59.33Q45 58.5 44.14,59.33L31.58,71.44Q31 72 31,72.8L31,90Q31 91 30,91ZM59 30a3.3 3.3 0 1 0 .01 0ZM75 30a3.3 3.3 0 1 0 .01 0Z';
  const puerta = 'M31 91V72.6Q31 72 31.43 71.58L44.28 59.19Q45 58.5 45.72 59.19L58.57 71.58Q59 72 59 72.6V91Z';
  const marca = (d, clase) => `<svg viewBox="0 6 92 85" class="${clase}" aria-hidden="true"><path class="cuerpo" fill-rule="evenodd" d="${d}"/><path class="puerta" d="${puerta}"/></svg>`;
  return {
    perro: (clase) => marca(perro, clase),
    gato: (clase) => marca(gato, clase),
    zona: linea('<circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/><path d="M9 15v-4l3-2.5 3 2.5v4z"/>'),
    chat: linea('<path d="M4 5h16v11H10l-4 4v-4H4z"/>'),
    candado: linea('<rect x="5" y="11" width="14" height="9"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
    bandera: linea('<path d="M6 21V4h12l-3 4 3 4H6"/>'),
    menu: linea('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    /* Marcadores del mapa: cada tipo se distingue por forma, no solo por color. */
    marcador: (tipo) => ({
      perdida: '<svg viewBox="0 0 64 64" class="marcador" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="#C2371F" fill-opacity=".14" stroke="#C2371F" stroke-width="2"/><circle cx="32" cy="32" r="17" fill="#C2371F"/><path d="M27 28a5 5 0 1 1 7 4.6c-1.6.8-2 1.6-2 3.4" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="41" r="1.9" fill="#fff"/></svg>',
      hallazgo: '<svg viewBox="0 0 64 64" class="marcador" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="#0A7350" fill-opacity=".14" stroke="#0A7350" stroke-width="2"/><path d="M17 47V27l15-11 15 11v20z" fill="#0A7350"/><path d="M25 34l5 5 9-10" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      avistamiento: '<svg viewBox="0 0 64 64" class="marcador" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="#5A45B8" fill-opacity=".14" stroke="#5A45B8" stroke-width="2" stroke-dasharray="6 4"/><circle cx="32" cy="32" r="17" fill="#fff" stroke="#5A45B8" stroke-width="4" stroke-dasharray="6 3"/><path d="M21 32q11-13 22 0-11 13-22 0z" fill="none" stroke="#5A45B8" stroke-width="2.6"/><circle cx="32" cy="32" r="3.2" fill="#5A45B8"/></svg>',
    })[tipo],
  };
})();
