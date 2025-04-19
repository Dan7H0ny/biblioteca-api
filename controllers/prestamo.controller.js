const PrestamoService = require('../services/prestamo.service');

exports.registrarPrestamo = async (req, res) => {
  const prestamo = await PrestamoService.registrar(req.body);
  res.status(201).json(prestamo);
};
