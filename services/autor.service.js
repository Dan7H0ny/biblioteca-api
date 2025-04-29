const Autor = require('../models/autor.model');
const DatabaseAdapter = require('../adapter/database.adapter');

const autorAdapter = new DatabaseAdapter(Autor);

class AutorService {
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

module.exports = AutorService;
