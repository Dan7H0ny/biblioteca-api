const AutorService = require('../services/autor.service');
const ModelFactory = require('../factory/model.factory');

exports.listarAutores = async (req, res) => {
  const autores = await AutorService.listar();
  res.json(autores);
};

exports.registrarAutor = async (req, res) => {
  const autor = ModelFactory.createModel('Autor');
  autor.nombre = req.body.nombre;
  const autorRegistrado = await AutorService.registrar(autor);
  res.status(201).json(autorRegistrado);
};

exports.actualizarAutor = async (req, res) => {
  const { id } = req.params;
  const autor = await AutorService.actualizar(id, req.body);
  res.json(autor);
};
