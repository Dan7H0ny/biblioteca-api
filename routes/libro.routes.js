const express = require('express');
const router = express.Router();
const controller = require('../controllers/libro.controller');

router.get('/', controller.listarLibros);
router.post('/', controller.registrarLibro);
router.put('/:id', controller.actualizarLibro);

module.exports = router;
