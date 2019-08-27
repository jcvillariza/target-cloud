var express = require('express');
var router = express.Router();
var sql_db = require('mssql');
var conn = require('../data/db_execution')();

var routes = function(){
    router.route('/')
        .get(function (req, response) {
            conn.connect()
                .then(() => {
                    var query = `SELECT 1, 'A', 'Here'`;
                    var request = new sql_db.Request(conn);

                    request.query(query)
                        .then(data => {
                            response.json(data.recordset);
                            conn.close();
                        })
                        .catch(err => {
                            conn.close();
                            response.status(400).send('Error:' + err);
                        });
                })
                .catch(err => {
                    conn.close();
                    response.status(400).send('Error:' + err);
                });
        });

    return router;
};

module.exports = routes;