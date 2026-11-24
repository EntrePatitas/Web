/* VISTA: privacidad y seguridad. */
EP.vistas.privacidad = (sitio, ic) => `
  <section id="privacidad" class="seccion celeste" aria-labelledby="t-privacidad">
    <div class="ancho privacidad">
      <h2 id="t-privacidad">Cuidamos a quien busca y a quien encuentra</h2>
      <ul>
        ${sitio.privacidad.map((p) => `<li>${ic[p.icono]}<div><h3>${p.titulo}</h3><p>${p.texto}</p></div></li>`).join('')}
      </ul>
    </div>
  </section>`;
