// =================================================================== Módulos

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// =================================================================== Configuração

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

require('./config/db');

// =================================================================== Rotas

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Recebendo requisição na API');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'Bem vindo a API do Desafio HU' });
});

var Hotel = require('./app/models/hotel');

require('./app/routes/hotel')(router, Hotel);

app.use('/api', router);

// =================================================================== Iniciando

app.listen(port);

console.log('Rodando na porta ' + port);
