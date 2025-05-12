// /Backend/Controller/reservasController.js
const Reservas = require('../models/reservas');

const reservasController = {
    create: (req, res) => {
        const novaReserva = req.body;
        Reservas.add(novaReserva, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Reserva adicionada com sucesso', id: result.insertId });
        });
    }
};

module.exports = reservasController;
