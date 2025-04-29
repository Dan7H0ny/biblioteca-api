const LibroService = require('../services/libro.service');
const ModelFactory = require('../factory/model.factory');

exports.listarLibros = async (req, res) => {
  const libros = await LibroService.listar();
  res.json(libros);
};

exports.registrarLibro = async (req, res) => {
  const libro = ModelFactory.createModel('Libro');
  libro.nombre = req.body.nombre;
  libro.codigo = req.body.codigo;
  libro.autor = req.body.autor;
  libro.autor_id = req.body.autor_id;
  const libroRegistrado = await LibroService.registrar(libro);
  res.status(201).json(libroRegistrado);
};

exports.actualizarLibro = async (req, res) => {
  const { id } = req.params;
  const libro = await LibroService.actualizar(id, req.body);
  res.json(libro);
};
