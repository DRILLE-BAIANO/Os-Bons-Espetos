const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

router.get('/reservas', reservasController.list);
router.post('/reservas', reservasController.create);

module.exports = router;
