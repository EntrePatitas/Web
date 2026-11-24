/* VISTA: descarga y eliminación de cuenta. */
EP.vistas.descarga = (sitio, ic) => `
  <section id="descarga" class="descarga" aria-labelledby="t-descarga">
    <div class="ancho descarga-fila">
      <div>
        <h2 id="t-descarga">${sitio.descarga.titulo}</h2>
        <p class="bajada">${sitio.descarga.texto}</p>
        <button type="button" class="boton" data-accion="descargar">${sitio.descarga.boton}</button>
      </div>
      ${ic.gato('descarga-marca')}
    </div>
  </section>
  <section id="cuenta" class="cuenta" aria-labelledby="t-cuenta">
    <div class="ancho cuenta-fila">
      <div><h2 id="t-cuenta">${sitio.cuenta.titulo}</h2><p>${sitio.cuenta.texto}</p></div>
      <button type="button" class="boton contorno" data-accion="eliminar-cuenta">${sitio.cuenta.boton}</button>
    </div>
  </section>`;
