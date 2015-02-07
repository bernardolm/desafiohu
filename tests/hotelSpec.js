var frisby = require('../node_modules/frisby');

var URL = 'http://localhost:8080/api';

frisby.create('POST hotel')
	.post(URL + '/hotels', {
		disponivelAte: '2015-03-01T00:00:00.000Z',
		disponivelDe: '2015-01-01T00:00:00.000Z',
		cidade: 'Cidade TESTE',
		nome: 'Hotel TESTE'
	}, {json: true})
	.expectStatus(200)
	.expectHeaderContains('content-type', 'application/json')

	.afterJSON(function(hotel) {

		expect(hotel._id).not.toBeUndefined();

		frisby.create('GET hotels')
			.get(URL + '/hotels')
			.expectStatus(200)
			.expectHeaderContains('content-type', 'application/json')
			.afterJSON(function(hotels) {

				expect(hotels).not.toBeUndefined();
				expect(hotels.length).toBeGreaterThan(0);

			})
		.toss();
	})

	.afterJSON(function(hotel) {
		frisby.create('GET hotel/id')
			.get(URL + '/hotels/' + hotel._id)
			.expectStatus(200)
			.expectHeaderContains('content-type', 'application/json')
			.expectJSON({
				disponivelAte: '2015-03-01T00:00:00.000Z',
				disponivelDe: '2015-01-01T00:00:00.000Z',
				cidade: 'Cidade TESTE',
				nome: 'Hotel TESTE'
			})
		.toss();
	})

	.afterJSON(function(hotel) {
		frisby.create('PUT hotel')
			.put(URL + '/hotels/' + hotel._id, {
				disponivelAte: '2015-03-01T00:00:00.000Z',
				disponivelDe: '2015-01-01T00:00:00.000Z',
				cidade: 'Cidade TESTE ALTERADO',
				nome: 'Hotel TESTE ALTERADO'
			}, {json: true})
			.expectStatus(200)
			.expectHeaderContains('content-type', 'application/json')
		.toss();
	})

	.afterJSON(function(hotel) {
		frisby.create('DELETE hotel')
			.delete(URL + '/hotels/' + hotel._id)
			.expectStatus(200)
			.expectHeaderContains('content-type', 'application/json')
		.toss();
	})

	.afterJSON(function(hotel) {
		frisby.create('GET hotel/id')
			.get(URL + '/hotels/' + hotel._id)
			.expectStatus(200)
			.expectHeaderContains('content-type', 'application/json')
			.afterJSON(function(hotel1) {

				expect(hotel1).toBeNull();

			})
		.toss();
	})
    .toss();