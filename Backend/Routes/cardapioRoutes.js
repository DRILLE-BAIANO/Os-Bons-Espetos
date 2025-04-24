const express = require('express');
const router = express.Router();
const cardapioController = require('../controllers/cardapioController');

router.get('/cardapio', cardapioController.list);
router.post('/cardapio', cardapioController.create);

module.exports = router;
