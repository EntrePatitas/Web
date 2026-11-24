/* CONTROLADOR: cambia la pantalla elegida con clic o con las flechas. */
EP.controladores.pantallas = {
  iniciar(raiz, modelo, vista) {
    const lista = raiz.querySelector('[role=tablist]');
    modelo.suscribir(() => vista.actualizar(raiz, modelo));
    lista.addEventListener('click', (e) => {
      const t = e.target.closest('[role=tab]');
      if (t) modelo.seleccionar(Number(t.dataset.indice));
    });
    lista.addEventListener('keydown', (e) => {
      const paso = { ArrowDown: modelo.indice + 1, ArrowRight: modelo.indice + 1, ArrowUp: modelo.indice - 1, ArrowLeft: modelo.indice - 1, Home: 0, End: modelo.lista.length - 1 }[e.key];
      if (paso === undefined) return;
      e.preventDefault();
      modelo.seleccionar(paso);
      lista.children[modelo.indice].focus();
    });
  },
};
