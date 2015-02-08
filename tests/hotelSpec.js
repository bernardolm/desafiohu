var frisby = require('../node_modules/frisby');

var URL = 'http://localhost:8080/api';

frisby.create('POST hotels')
	.post(URL + '/hotels', {
		city: 'Cidade TESTE',
		name: 'Hotel TESTE'
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
		frisby.create('GET hotels/id')
			.get(URL + '/hotels/' + hotel._id)
			.expectStatus(200)
			.expectHeaderContains('content-type', 'application/json')
			.expectJSON({
				city: 'Cidade TESTE',
				name: 'Hotel TESTE'
			})
		.toss();
	})

	.afterJSON(function(hotel) {
		frisby.create('PUT hotels')
			.put(URL + '/hotels/' + hotel._id, {
				city: 'Cidade TESTE ALTERADO',
				name: 'Hotel TESTE ALTERADO'
			}, {json: true})
			.expectStatus(200)
			.expectHeaderContains('content-type', 'application/json')
		.toss();
	})

	.afterJSON(function(hotel) {
		frisby.create('DELETE hotels')
			.delete(URL + '/hotels/' + hotel._id)
			.expectStatus(200)
			.expectHeaderContains('content-type', 'application/json')
		.toss();
	})

	.afterJSON(function(hotel) {
		frisby.create('GET hotels/id')
			.get(URL + '/hotels/' + hotel._id)
			.expectStatus(200)
			.expectHeaderContains('content-type', 'application/json')
			.afterJSON(function(hotel1) {

				expect(hotel1).toBeNull();

			})
		.toss();
	})
    .toss();