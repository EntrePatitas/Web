/* MODELO: datos generales del sitio. */
EP.modelos.sitio = {
  nombre: 'EntrePatitas',
  menu: [
    { texto: 'Reportes', destino: 'reportes' },
    { texto: 'Cómo funciona', destino: 'como-funciona' },
    { texto: 'Coincidencias', destino: 'coincidencias' },
    { texto: 'La app', destino: 'app' },
    { texto: 'Preguntas', destino: 'preguntas' },
  ],
  portada: {
    titulo: 'Un aviso que sí llega a tu barrio',
    bajada: 'Perros y gatos perdidos y encontrados en San Fernando, en un solo mapa.',
    boton: 'Descargar para Android',
    enlace: 'Ver cómo funciona',
  },
  pasos: [
    { titulo: 'Publica', texto: 'Cuenta qué animal perdiste, encontraste o viste. Agrega fotos y marca la zona.' },
    { titulo: 'Compara', texto: 'La app revisa color, tamaño, rasgos, sexo, raza y cercanía. Te avisa desde 70 % de similitud.' },
    { titulo: 'Conversa', texto: 'Si confirmas que es tu mascota, se abre un chat privado para coordinar el encuentro.' },
    { titulo: 'Cierra', texto: 'Cuando vuelva a casa, marca el reencuentro. El reporte sale del mapa.' },
  ],
  privacidad: [
    { icono: 'zona', titulo: 'Zona aproximada', texto: 'El mapa muestra un área, nunca el punto exacto ni tu domicilio.' },
    { icono: 'chat', titulo: 'Sin dar tu número', texto: 'Las personas conversan dentro de la app. Tu teléfono no se publica.' },
    { icono: 'candado', titulo: 'Chat con confirmación', texto: 'Se abre solo cuando el dueño confirma. Si fue un avistamiento, también debe aceptar quien lo vio.' },
    { icono: 'bandera', titulo: 'Denuncias', texto: 'Puedes denunciar un reporte falso o un intento de estafa. Una persona lo revisa.' },
  ],
  descarga: {
    titulo: '¿Lo viste pasar?',
    texto: 'Instala EntrePatitas y ayuda a que vuelva a casa. Gratis, para Android.',
    boton: 'Descargar para Android',
  },
  cuenta: {
    titulo: '¿Quieres eliminar tu cuenta?',
    texto: 'Se borran tus reportes, fotos, coincidencias y chats.',
    boton: 'Eliminar mi cuenta',
  },
  mensajes: {
    descargar: 'La descarga todavía no está disponible.',
    'eliminar-cuenta': 'La eliminación de cuenta todavía no está disponible en la web.',
    privacidad: 'La política de privacidad todavía no está publicada.',
    terminos: 'Los términos de uso todavía no están publicados.',
    contacto: 'El contacto todavía no está disponible.',
  },
  pie: {
    enlaces: [
      { texto: 'Política de privacidad', accion: 'privacidad' },
      { texto: 'Términos de uso', accion: 'terminos' },
      { texto: 'Contacto', accion: 'contacto' },
      { texto: 'Eliminar mi cuenta', accion: 'eliminar-cuenta' },
    ],
    nota: 'Proyecto académico, AIEP San Fernando, 2026. Los animales, reportes y conversaciones que se muestran son ejemplos ficticios.',
  },
};
