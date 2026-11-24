/* VISTA: pie de página. */
EP.vistas.pie = (sitio) => `
  <div class="ancho">
    <img src="recursos/img/logo-negativo.svg" alt="${sitio.nombre}" width="191" height="40">
    <ul>${sitio.pie.enlaces.map((e) => `<li><button type="button" data-accion="${e.accion}">${e.texto}</button></li>`).join('')}</ul>
    <p>${sitio.pie.nota}</p>
  </div>`;
