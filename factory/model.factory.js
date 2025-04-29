
const Autor = require('../models/autor.model');
const Libro = require('../models/libro.model');
const Prestamo = require('../models/prestamo.model');

class ModelFactory {
  static createModel(type) {
    switch (type) {
      case 'Autor':
        return new Autor();
      case 'Libro':
        return new Libro();
      case 'Prestamo':
        return new Prestamo();
      default:
        throw new Error('Tipo de modelo no válido');
    }
  }
}

module.exports = ModelFactory;
