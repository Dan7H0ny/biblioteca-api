const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
  nombre: String,
  codigo: String,
  autor: String,
  autor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Autor' }
});

module.exports = mongoose.model('Libro', LibroSchema);
