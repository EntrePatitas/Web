/* MODELO: ejemplo de puntaje del informe. El total se calcula, no se escribe a mano. */
EP.modelos.coincidencia = {
  umbral: 70,
  mascota: 'Canela',
  criterios: [
    { nombre: 'Color', puntos: 30, maximo: 30 },
    { nombre: 'Tamaño', puntos: 20, maximo: 20 },
    { nombre: 'Etiquetas', puntos: 10, maximo: 15 },
    { nombre: 'Sexo', puntos: 7.5, maximo: 15 },
    { nombre: 'Raza', puntos: 5, maximo: 10 },
    { nombre: 'Cercanía', puntos: 7.6, maximo: 10 },
  ],
  total() { return this.criterios.reduce((suma, c) => suma + c.puntos, 0); },
  superaUmbral() { return this.total() >= this.umbral; },
};
