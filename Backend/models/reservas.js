const db = require('./config/db');

const Reservas = {
    getAll: (callback) => {
        db.query('SELECT * FROM reservas', callback);
    },
    add: (reserva, callback) => {
        const { nome_cliente, data_reserva, numero_pessoas } = reserva;
        db.query('INSERT INTO reservas (nome_cliente, data_reserva, numero_pessoas) VALUES (?, ?, ?)', [nome_cliente, data_reserva, numero_pessoas], callback);
    }
};

module.exports = Reservas;
