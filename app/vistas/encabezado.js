/* VISTA: encabezado y menú. */
EP.vistas.encabezado = (sitio, ic) => `
  <div class="ancho encabezado-fila">
    <a class="logo" href="#contenido"><img src="recursos/img/logo.svg" alt="${sitio.nombre}, ir al inicio" width="191" height="40"></a>
    <button type="button" class="boton-menu" aria-expanded="false" aria-controls="menu">${ic.menu}<span>Menú</span></button>
    <nav id="menu" class="menu" aria-label="Principal">
      ${sitio.menu.map((m) => `<a href="#${m.destino}">${m.texto}</a>`).join('')}
      <button type="button" class="boton chico" data-accion="descargar">Descargar</button>
    </nav>
  </div>`;
