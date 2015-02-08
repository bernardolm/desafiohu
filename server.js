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
var Offer = require('./app/models/offer');

require('./app/routes/hotel')(router, Hotel);
require('./app/routes/offer')(router, Offer, Hotel);

app.use('/api', router);

// =================================================================== Populando

Hotel.find(function(err, offers) {
	if (offers.length == 0)
	{
		var hotel1 = new Hotel();
		hotel1.name = 'Hotel Carioca';
		hotel1.city = 'Rio de Janeiro';
		hotel1.save(function(err, newHotel) {
			hotel1._id = newHotel._id;
			if (err) console.log(err);
		});

		var hotel2 = new Hotel();
		hotel2.name = 'Hotel Sampa';
		hotel2.city = 'São Paulo';
		hotel2.save(function(err, newHotel) {
			hotel2._id = newHotel._id;
			if (err) console.log(err);
		});

		var hotel3 = new Hotel();
		hotel3.name = 'Hotel Mineiro';
		hotel3.city = 'Minas Gerais';
		hotel3.save(function(err, newHotel) {
			hotel3._id = newHotel._id;
			if (err) console.log(err);
		});

		var offer1 = new Offer();
		offer1.startDate = new Date('2015-01-01T00:00:00.000Z');
		offer1.endDate = new Date('2015-01-15T00:00:00.000Z');
		offer1.hotel = hotel1._id;
		offer1.save(function(err) {
			if (err) console.log(err);
		});

		var offer2 = new Offer();
		offer2.startDate = new Date('2015-02-01T00:00:00.000Z');
		offer2.endDate = new Date('2015-02-15T00:00:00.000Z');
		offer2.hotel = hotel2._id;
		offer2.save(function(err) {
			if (err) console.log(err);
		});

		var offer3 = new Offer();
		offer3.startDate = new Date('2015-03-01T00:00:00.000Z');
		offer3.endDate = new Date('2015-03-15T00:00:00.000Z');
		offer3.hotel = hotel3._id;
		offer3.save(function(err) {
			if (err) console.log(err);
		});

		console.log('Banco populado com dados de teste');
	}
});

// =================================================================== Iniciando

app.listen(port);

console.log('Rodando na porta ' + port);
