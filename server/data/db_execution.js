require('dotenv').config();

var config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_SERVER,
    database:  process.env.SQL_DATABASE
};

var sql = require("mssql");
var connect = function() {
    var conn = new sql.ConnectionPool(config);

    return conn;
};

module.exports = connect;