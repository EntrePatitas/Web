/* VISTA: recorrido por las pantallas de la app. */
EP.vistas.pantallas = {
  plantilla: (m) => `
  <section id="app" class="seccion" aria-labelledby="t-app">
    <div class="ancho pantallas">
      <div>
        <h2 id="t-app">Mírala por dentro</h2>
        <div class="pestanas" role="tablist" aria-label="Pantallas de la app" aria-orientation="vertical">
          ${m.lista.map((p, i) => `
            <button type="button" role="tab" id="tab-${p.id}" aria-controls="panel-pantalla" aria-selected="${i === m.indice}" tabindex="${i === m.indice ? 0 : -1}" data-indice="${i}">
              <b>${p.titulo}</b><span>${p.texto}</span>
            </button>`).join('')}
        </div>
      </div>
      <div id="panel-pantalla" class="telefono" role="tabpanel" aria-labelledby="tab-${m.actual().id}" tabindex="0">
        ${m.lista.map((p, i) => `<img src="recursos/img/pantalla-${p.id}.webp" alt="${p.alt}" width="648" height="1332" ${i === m.indice ? '' : 'hidden'}>`).join('')}
      </div>
    </div>
  </section>`,
  actualizar(raiz, m) {
    raiz.querySelectorAll('[role=tab]').forEach((t, i) => {
      t.setAttribute('aria-selected', i === m.indice);
      t.tabIndex = i === m.indice ? 0 : -1;
    });
    raiz.querySelectorAll('.telefono img').forEach((img, i) => { img.hidden = i !== m.indice; });
    raiz.querySelector('#panel-pantalla').setAttribute('aria-labelledby', `tab-${m.actual().id}`);
  },
};
