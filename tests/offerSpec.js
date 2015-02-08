var frisby = require('../node_modules/frisby');

var URL = 'http://localhost:8080/api';

frisby.create('GET offers')
	.get(URL + '/offers')
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.afterJSON(function(offers) {

		/*offers.forEach(function(offer) {
			if (offer.hotel)
				console.log(offer.hotel.city);
		});*/

		expect(offers).not.toBeUndefined();
		expect(offers.length).toBeGreaterThan(0);

	})
.toss();

frisby.create('GET offers/Rio de Janeiro/2014-12-05/2014-12-20')
	.get(URL + '/offers/Rio de Janeiro/2014-12-05/2014-12-20')
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.afterJSON(function(offers) {

		/*offers.forEach(function(offer) {
			if (offer.hotel)
				console.log(offer.hotel.city);
		});*/

		expect(offers).not.toBeUndefined();
		expect(offers.length).toEqual(0);

	})
.toss();

frisby.create('GET offers/Rio de Janeiro/2014-12-25/2015-01-01')
	.get(URL + '/offers/Rio de Janeiro/2014-12-25/2015-01-01')
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.afterJSON(function(offers) {

		/*offers.forEach(function(offer) {
			if (offer.hotel)
				console.log(offer.hotel.city);
		});*/

		expect(offers).not.toBeUndefined();
		expect(offers.length).toEqual(1);

	})
.toss();

frisby.create('GET offers/Rio de Janeiro/2014-12-20/2015-01-10')
	.get(URL + '/offers/Rio de Janeiro/2014-12-20/2015-01-10')
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.afterJSON(function(offers) {

		/*offers.forEach(function(offer) {
			if (offer.hotel)
				console.log(offer.hotel.city);
		});*/

		expect(offers).not.toBeUndefined();
		expect(offers.length).toEqual(1);

	})
.toss();

frisby.create('GET offers/Rio de Janeiro/2015-01-01/2015-01-15')
	.get(URL + '/offers/Rio de Janeiro/2015-01-01/2015-01-15')
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.afterJSON(function(offers) {

		/*offers.forEach(function(offer) {
			if (offer.hotel)
				console.log(offer.hotel.city);
		});*/

		expect(offers).not.toBeUndefined();
		expect(offers.length).toEqual(1);

	})
.toss();

frisby.create('GET offers/Rio de Janeiro/2015-01-05/2015-01-10')
	.get(URL + '/offers/Rio de Janeiro/2015-01-05/2015-01-10')
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.afterJSON(function(offers) {

		/*offers.forEach(function(offer) {
			if (offer.hotel)
				console.log(offer.hotel.city);
		});*/

		expect(offers).not.toBeUndefined();
		expect(offers.length).toEqual(1);

	})
.toss();

frisby.create('GET offers/Rio de Janeiro/2015-01-05/2015-01-15')
	.get(URL + '/offers/Rio de Janeiro/2015-01-05/2015-01-15')
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.afterJSON(function(offers) {

		/*offers.forEach(function(offer) {
			if (offer.hotel)
				console.log(offer.hotel.city);
		});*/

		expect(offers).not.toBeUndefined();
		expect(offers.length).toEqual(1);

	})
.toss();

frisby.create('GET offers/Rio de Janeiro/2015-01-10/2015-01-20')
	.get(URL + '/offers/Rio de Janeiro/2015-01-10/2015-01-20')
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.afterJSON(function(offers) {

		/*offers.forEach(function(offer) {
			if (offer.hotel)
				console.log(offer.hotel.city);
		});*/

		expect(offers).not.toBeUndefined();
		expect(offers.length).toEqual(1);

	})
.toss();


frisby.create('GET offers/Rio de Janeiro/2015-01-15/2015-01-20')
	.get(URL + '/offers/Rio de Janeiro/2015-01-15/2015-01-20')
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.afterJSON(function(offers) {

		/*offers.forEach(function(offer) {
			if (offer.hotel)
				console.log(offer.hotel.city);
		});*/

		expect(offers).not.toBeUndefined();
		expect(offers.length).toEqual(1);

	})
.toss();

frisby.create('GET offers/Rio de Janeiro/2015-01-16/2015-02-20')
	.get(URL + '/offers/Rio de Janeiro/2015-01-16/2015-02-20')
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.afterJSON(function(offers) {

		offers.forEach(function(offer) {

			console.log('\n\n', offer, '\n\n');

			if (offer.hotel)
				console.log('city: ' + offer.hotel.city);
		});

		expect(offers).not.toBeUndefined();
		expect(offers.length).toEqual(0);

	})
.toss();

frisby.create('GET offers/Minas Gerais/2015-01-05/2015-01-10')
	.get(URL + '/offers/Minas Gerais/2015-01-05/2015-01-10')
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')
	.afterJSON(function(offers) {

		/*offers.forEach(function(offer) {
			if (offer.hotel)
				console.log(offer.hotel.city);
		});*/

		expect(offers).not.toBeUndefined();
		expect(offers.length).toEqual(0);

	})
.toss();