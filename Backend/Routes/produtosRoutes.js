// /Backend/Routes/produtosRoutes.js
const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.post('/produtos', produtosController.create);

module.exports = router;
