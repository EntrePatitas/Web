/* VISTA: cómo funciona. */
EP.vistas.pasos = (sitio) => `
  <section id="como-funciona" class="seccion celeste" aria-labelledby="t-pasos">
    <div class="ancho">
      <h2 id="t-pasos">Del aviso al reencuentro</h2>
      <ol class="pasos">
        ${sitio.pasos.map((p) => `<li><h3>${p.titulo}</h3><p>${p.texto}</p></li>`).join('')}
      </ol>
    </div>
  </section>`;
