// /Backend/Controller/produtosController.js
const Produtos = require('../models/produtos');

const produtosController = {
    create: (req, res) => {
        const novoProduto = req.body;
        Produtos.add(novoProduto, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Produto adicionado com sucesso', id: result.insertId });
        });
    }
};

module.exports = produtosController;
