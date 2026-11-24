/* CONTROLADOR: abre y cierra el menú en pantallas angostas. */
EP.controladores.menu = {
  iniciar(raiz) {
    const boton = raiz.querySelector('.boton-menu');
    const poner = (abierto) => { boton.setAttribute('aria-expanded', abierto); raiz.classList.toggle('abierto', abierto); };
    boton.addEventListener('click', () => poner(boton.getAttribute('aria-expanded') !== 'true'));
    raiz.querySelector('.menu').addEventListener('click', (e) => { if (e.target.closest('a, button')) poner(false); });
    raiz.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') { poner(false); boton.focus(); }
    });
  },
};
