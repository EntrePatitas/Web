/* VISTA: preguntas frecuentes. */
EP.vistas.preguntas = (preguntas) => `
  <section id="preguntas" class="seccion" aria-labelledby="t-preguntas">
    <div class="ancho preguntas">
      <h2 id="t-preguntas">Preguntas frecuentes</h2>
      <div>${preguntas.map((q) => `<details><summary>${q.p}</summary><p>${q.r}</p></details>`).join('')}</div>
    </div>
  </section>`;
