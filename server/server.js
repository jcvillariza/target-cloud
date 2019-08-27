
var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');

require('dotenv').config();

var server = express();
var port = process.env.SERVER_PORT;

var dbParamsRoute = require('./routes/db_params')();
var userRoute = require('./routes/user')();

server.use(helmet.hidePoweredBy({setTo: 'IIS/10'}));

server.use(bodyParser.json());

server.use('/api/user', userRoute);
server.use('/api/dbparams', dbParamsRoute);

server.listen(port, function() {
    console.log(`----- server API::${port} initialized -----`);
});