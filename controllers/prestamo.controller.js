const PrestamoService = require('../services/prestamo.service');
const ModelFactory = require('../factory/model.factory');
const LoanSubject = require('../observer/loan.subject');
const LoanObserver = require('../observer/loan.observer');

exports.registrarPrestamo = async (req, res) => {
  const prestamo = ModelFactory.createModel('Prestamo');
  prestamo.fecha = req.body.fecha;
  prestamo.lector = req.body.lector;
  prestamo.libro_id = req.body.libro_id;

  const prestamoRegistrado = await PrestamoService.registrar(prestamo);
  const loanSubject = new LoanSubject();
  const loanObserver = new LoanObserver();
  loanSubject.subscribe(loanObserver); 
  loanSubject.notify(prestamoRegistrado); 

  res.status(201).json(prestamoRegistrado);
};

exports.eliminarPrestamo = async (req, res) => {
  const { id } = req.params;
  const prestamoEliminado = await PrestamoService.eliminar(id);
  if (!prestamoEliminado) {
    return res.status(404).json({ message: 'Préstamo no encontrado' });
  }
  res.json({ message: 'Préstamo eliminado correctamente' });
};