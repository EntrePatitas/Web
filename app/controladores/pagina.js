/* CONTROLADOR principal: pide datos a los modelos, los entrega a las vistas
   y pone en marcha los demás controladores. El orden de las secciones se define aquí. */
EP.controladores.pagina = {
  iniciar() {
    const { modelos: m, vistas: v, controladores: c } = EP;
    const ic = v.iconos;
    const encabezado = document.getElementById('encabezado');
    const contenido = document.getElementById('contenido');

    encabezado.innerHTML = v.encabezado(m.sitio, ic);
    contenido.innerHTML = [
      v.portada(m.sitio, ic),
      v.reportes(m.reportes, ic),
      v.pasos(m.sitio),
      v.coincidencia(m.coincidencia),
      v.pantallas.plantilla(m.pantallas),
      v.privacidad(m.sitio, ic),
      v.preguntas(m.preguntas),
      v.descarga(m.sitio, ic),
    ].join('');
    document.getElementById('pie').innerHTML = v.pie(m.sitio);

    c.menu.iniciar(encabezado);
    c.pantallas.iniciar(document.getElementById('app'), m.pantallas, v.pantallas);
    c.acciones.iniciar(m.sitio, v.aviso);

    // Las secciones se crean después de cargar: se respeta el enlace con #ancla.
    if (location.hash.length > 1) document.getElementById(location.hash.slice(1))?.scrollIntoView();
  },
};
