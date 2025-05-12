// /Backend/Controller/cardapioController.js
const Cardapio = require('../models/cardapio');

const cardapioController = {
    list: (req, res) => {
        Cardapio.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
    },
    create: (req, res) => {
        const newItem = req.body;
        Cardapio.add(newItem, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Item adicionado ao cardápio', id: result.insertId });
        });
    }
};

module.exports = cardapioController;
