/* CONTROLADOR: botones provisionales. Cuando exista la función real,
   se reemplaza aquí el aviso por la acción correspondiente. */
EP.controladores.acciones = {
  iniciar(sitio, vista) {
    const el = document.getElementById('aviso');
    let reloj;
    document.addEventListener('click', (e) => {
      const b = e.target.closest('[data-accion]');
      if (!b) return;
      clearTimeout(reloj);
      vista.mostrar(el, sitio.mensajes[b.dataset.accion]);
      reloj = setTimeout(() => vista.ocultar(el), 5000);
    });
  },
};
