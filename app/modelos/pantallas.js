/* MODELO: pantallas de la app y cuál está seleccionada.
   Avisa a quien se suscriba cada vez que cambia la selección. */
EP.modelos.pantallas = {
  lista: [
    { id: 'mapa', titulo: 'Mapa', texto: 'Reportes cercanos, con filtros y radio de búsqueda.', alt: 'Mapa con una pérdida, un hallazgo y un avistamiento dentro de un radio de 2 km.' },
    { id: 'publicar', titulo: 'Publicar', texto: 'Un paso a la vez, para avisar sin perder tiempo.', alt: 'Formulario para publicar un reporte.' },
    { id: 'coincidencia', titulo: 'Coincidencia', texto: 'Los dos animales lado a lado y el porqué del puntaje.', alt: 'Comparación entre Canela y un hallazgo con 80 % de similitud.' },
    { id: 'chat', titulo: 'Chat', texto: 'Coordina el encuentro sin compartir tu número.', alt: 'Conversación privada entre el dueño y quien encontró al animal.' },
    { id: 'mis-reportes', titulo: 'Mis reportes', texto: 'Renueva, edita o marca el reencuentro.', alt: 'Lista de reportes propios con sus días restantes.' },
  ],
  indice: 0,
  oyentes: [],
  actual() { return this.lista[this.indice]; },
  suscribir(fn) { this.oyentes.push(fn); },
  seleccionar(i) {
    const n = this.lista.length;
    this.indice = ((i % n) + n) % n;
    this.oyentes.forEach((fn) => fn(this.indice));
  },
};
