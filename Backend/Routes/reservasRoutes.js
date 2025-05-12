// /Backend/Routes/reservasRoutes.js
const express = require('express');
const router = express.Router();
const reservasController = require('../controllers/reservasController');

router.post('/reservas', reservasController.create);

module.exports = router;
