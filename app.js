'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas de la aplicación
var frutas_routes = require('./routes/fruta');

//body-parser
//para convertir los datos por post a json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar CORS

//rutas
app.use('/api', frutas_routes);

module.exports = app;
