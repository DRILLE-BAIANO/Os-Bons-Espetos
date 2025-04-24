const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cardapioRoutes = require('routes/cardapioRoutes');
const reservasRoutes = require('routes/reservasRoutes');

app.use(bodyParser.json());

app.use('/api', cardapioRoutes);
app.use('/api', reservasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
