/* VISTA: portada. La puerta del símbolo se abre hacia el resto de la página. */
EP.vistas.portada = (sitio, ic) => `
  <section class="portada" aria-labelledby="t-portada">
    <div class="ancho portada-fila">
      <div class="portada-texto">
        <h1 id="t-portada">${sitio.portada.titulo}</h1>
        <p class="bajada">${sitio.portada.bajada}</p>
        <div class="acciones">
          <button type="button" class="boton" data-accion="descargar">${sitio.portada.boton}</button>
          <a class="enlace" href="#como-funciona">${sitio.portada.enlace}</a>
        </div>
      </div>
      ${ic.perro('portada-marca')}
    </div>
  </section>`;
