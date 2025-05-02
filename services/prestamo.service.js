const Prestamo = require('../models/prestamo.model');
const DatabaseAdapter = require('../adapter/database.adapter');

const autorAdapter = new DatabaseAdapter(Prestamo);

class PrestamoService {
  static async registrar(data) {
    return await autorAdapter.create(data);
  }

  static async eliminar(id) {
    return await autorAdapter.delete(id);
  }
}

module.exports = PrestamoService;
