module.exports = function(router, Hotel) {

	router.route('/hotels')
		.post(function(req, res) {
			var hotel = new Hotel();
			hotel.nome = req.body.nome;
			hotel.cidade = req.body.cidade;
			hotel.disponivelDe = req.body.disponivelDe;
			hotel.disponivelAte = req.body.disponivelAte;

			hotel.save(function(err, newHotel) {
				if (err)
					res.send(err);

				res.json({ message: 'Hotel criado', _id: newHotel._id });
			});
		})
		.get(function(req, res) {
			Hotel.find(function(err, hotels) {
				if (err)
					res.send(err);

				res.json(hotels);
			});
		});

	router.route('/hotels/:hotel_id')
		.get(function(req, res) {
			Hotel.findById(req.params.hotel_id, function(err, hotel) {
				if (err)
					res.send(err);

				res.json(hotel);
			});
		})
		.put(function(req, res) {
			Hotel.findById(req.params.hotel_id, function(err, hotel) {
				if (err)
					res.send(err);

				hotel.nome = req.body.nome;
				hotel.cidade = req.body.cidade;
				hotel.disponivelDe = req.body.disponivelDe;
				hotel.disponivelAte = req.body.disponivelAte;

				hotel.save(function(err) {
					if (err)
						res.send(err);

					res.json({ message: 'Hotel alterado' });
				});
			});
		})
		.delete(function(req, res) {
			Hotel.remove({ _id: req.params.hotel_id }, function(err, hotel) {
				if (err)
					res.send(err);

				res.json({ message: 'Hotel excluído com sucesso' });
			});
		});

	router.route('/hotels/:cidade')
		.get(function(req, res) {
			Hotel.find({
				cidade: new RegExp(req.params.cidade, 'i')
			}, function(err, hotels) {
				if (err)
					res.send(err);

				res.json(hotels);
			});
		});
}