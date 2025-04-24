const db = require('./config/db');

const Cardapio = {
    getAll: (callback) => {
        db.query('SELECT * FROM cardapio', callback);
    },
    add: (item, callback) => {
        const { nome, preco, descricao } = item;
        db.query('INSERT INTO cardapio (nome, preco, descricao) VALUES (?, ?, ?)', [nome, preco, descricao], callback);
    }
};

module.exports = Cardapio;
