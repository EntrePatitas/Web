/* VISTA: ejemplo de coincidencia. */
EP.vistas.coincidencia = (c) => {
  const n = (x) => x.toLocaleString('es-CL', { maximumFractionDigits: 1 });
  return `
  <section id="coincidencias" class="seccion oscura" aria-labelledby="t-coincidencia">
    <div class="ancho coincidencia">
      <div>
        <h2 id="t-coincidencia">Podría ser ${c.mascota}</h2>
        <p class="bajada">Cada coincidencia muestra de dónde sale su puntaje. La app sugiere; el dueño confirma o descarta.</p>
        <p class="total"><strong>${n(Math.round(c.total()))} %</strong> de similitud</p>
        ${c.superaUmbral() ? `<p>Supera el ${c.umbral} %, así que la app avisa al dueño.</p>` : ''}
      </div>
      <dl class="barras">
        ${c.criterios.map((k) => `
          <div>
            <dt>${k.nombre}</dt>
            <dd><span class="barra" aria-hidden="true"><i style="width:${(k.puntos / k.maximo) * 100}%"></i></span><b>${n(k.puntos)} de ${n(k.maximo)}</b></dd>
          </div>`).join('')}
      </dl>
    </div>
  </section>`;
};
