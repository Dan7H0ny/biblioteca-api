const LibroService = require('../services/libro.service');

exports.listarLibros = async (req, res) => {
  const libros = await LibroService.listar();
  res.json(libros);
};

exports.registrarLibro = async (req, res) => {
  const libro = await LibroService.registrar(req.body);
  res.status(201).json(libro);
};

exports.actualizarLibro = async (req, res) => {
  const { id } = req.params;
  const libro = await LibroService.actualizar(id, req.body);
  res.json(libro);
};
