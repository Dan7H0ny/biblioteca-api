const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
  nombre: String,
  codigo: String,
  autor: String
});

module.exports = mongoose.model('Libro', LibroSchema);
