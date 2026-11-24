/* VISTA: tipos de reporte. */
EP.vistas.reportes = (reportes, ic) => `
  <section id="reportes" class="seccion" aria-labelledby="t-reportes">
    <div class="ancho">
      <h2 id="t-reportes">Tres maneras de avisar</h2>
      <ul class="tipos">
        ${reportes.map((r) => `
          <li class="tipo ${r.tipo}">
            ${ic.marcador(r.tipo)}
            <h3>${r.titulo}</h3>
            <p class="pregunta">${r.pregunta}</p>
            <p>${r.texto}</p>
          </li>`).join('')}
      </ul>
    </div>
  </section>`;
