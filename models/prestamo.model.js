const mongoose = require('mongoose');

const PrestamoSchema = new mongoose.Schema({
  fecha: Date,
  lector: String,
  libro_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Libro' }
});

module.exports = mongoose.model('Prestamo', PrestamoSchema);
