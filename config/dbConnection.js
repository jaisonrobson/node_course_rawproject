var mysql = require('mysql');

var mysqlConnection = function() {
    console.log('Conexao com banco de dados estabelecida.');

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    console.log('Autoload carregou modulo de conexao com banco de dados.');

    return mysqlConnection;    
}