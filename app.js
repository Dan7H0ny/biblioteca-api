const express = require('express');
const app = express();
const libroRoutes = require('./routes/libro.routes');
const prestamoRoutes = require('./routes/prestamo.routes');
const autorRoutes = require('./routes/autor.routes');

app.use(express.json());

app.use('/api/autores', autorRoutes);
app.use('/api/libros', libroRoutes);
app.use('/api/prestamos', prestamoRoutes);

module.exports = app;
