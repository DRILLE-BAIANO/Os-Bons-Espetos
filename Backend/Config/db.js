// /Backend/Config/db.js
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'kaua', // substitua pelo seu usuário do MySQL
    password: '1234', // substitua pela sua senha do MySQL
    database: 'restaurante_admin' // substitua pelo nome do seu banco de dados
});
db.connect((err) => {
    if (err) {
        console.error('Erro de conexão: ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});
module.exports = db;