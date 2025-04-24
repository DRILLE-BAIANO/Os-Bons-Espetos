const Reservas = require('../models/reservas');

const reservasController = {
    list: (req, res) => {
        Reservas.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
    },
    create: (req, res) => {
        const newReserva = req.body;
        Reservas.add(newReserva, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Reserva feita com sucesso', id: result.insertId });
        });
    }
};

module.exports = reservasController;
