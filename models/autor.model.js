const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
  nombre: String
});

module.exports = mongoose.model('Autor', AutorSchema);
