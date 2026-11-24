/* VISTA: mensaje breve al pie de la ventana. */
EP.vistas.aviso = {
  mostrar(el, texto) { el.textContent = texto; el.classList.add('visible'); },
  ocultar(el) { el.classList.remove('visible'); el.textContent = ''; },
};
