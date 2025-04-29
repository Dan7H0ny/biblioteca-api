const express = require('express');
const router = express.Router();
const controller = require('../controllers/autor.controller');

router.get('/', controller.listarAutores);
router.post('/', controller.registrarAutor);
router.put('/:id', controller.actualizarAutor);

module.exports = router;
