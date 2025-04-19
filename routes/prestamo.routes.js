const express = require('express');
const router = express.Router();
const controller = require('../controllers/prestamo.controller');

router.post('/', controller.registrarPrestamo);

module.exports = router;
