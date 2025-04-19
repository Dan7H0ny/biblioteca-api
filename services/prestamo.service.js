const Prestamo = require('../models/prestamo.model');

class PrestamoService {
  static async registrar(data) {
    return await Prestamo.create(data);
  }
}

module.exports = PrestamoService;
