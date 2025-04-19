const Libro = require('../models/libro.model');

class LibroService {
  static async listar() {
    return await Libro.find();
  }

  static async registrar(data) {
    return await Libro.create(data);
  }

  static async actualizar(id, data) {
    return await Libro.findByIdAndUpdate(id, data, { new: true });
  }
}

module.exports = LibroService;
