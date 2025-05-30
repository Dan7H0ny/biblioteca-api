const Libro = require('../models/libro.model');
const DatabaseAdapter = require('../adapter/database.adapter');

const autorAdapter = new DatabaseAdapter(Libro);

class LibroService {
  static async listar() {
    return await autorAdapter.find();
  }

  static async registrar(data) {
    return await autorAdapter.create(data);
  }

  static async actualizar(id, data) {
    return await autorAdapter.findByIdAndUpdate(id, data);
  }
}

module.exports = LibroService;
