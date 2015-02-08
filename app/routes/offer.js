module.exports = function(router, Offer) {

	router.route('/offers')
		.post(function(req, res) {
			var offer = new Offer();
			offer.startDate = req.body.checkIn;
			offer.endDate = req.body.checkOut;
			offer.hotel = req.body.hotel;

			offer.save(function(err, newOffer) {
				if (err)
					res.send(err);

				res.json({ message: 'Oferta criada', _id: newOffer._id });
			});
		})
		.get(function(req, res) {
			Offer
				.find()
				.populate('hotel')
				.exec(function(err, offers) {
					if (err)
						res.send(err);

					res.json(offers);
				});
		});

	router.route('/offers/:offer_id')
		.get(function(req, res) {
			Offer
				.findById(req.params.offer_id)
				.populate('hotel')
				.exec(function(err, offer) {
					if (err)
						res.send(err);

					res.json(offer);
				});
		})
		.put(function(req, res) {
			Offer.findById(req.params.offer_id, function(err, offer) {
				if (err)
					res.send(err);

				offer.startDate = req.body.checkIn;
				offer.endDate = req.body.checkOut;

				offer.save(function(err) {
					if (err)
						res.send(err);

					res.json({ message: 'Oferta alterada' });
				});
			});
		})
		.delete(function(req, res) {
			Offer.remove({ _id: req.params.offer_id }, function(err, offer) {
				if (err)
					res.send(err);

				res.json({ message: 'Oferta excluída com sucesso' });
			});
		});

	router.route('/offers/:cidade/:checkIn/:checkOut')
		.get(function(req, res) {
			Offer
				.find({
					$or: [
						{
							startDate: { $gte: new Date(req.params.checkIn) },
							endDate: { $lte: new Date(req.params.checkOut) }
						},
						{
							startDate: { $lte: new Date(req.params.checkIn) },
							endDate: { $gte: new Date(req.params.checkOut) }
						},
						{
							startDate: { $gte: new Date(req.params.checkIn) },
							startDate: { $lte: new Date(req.params.checkOut) },
							endDate: { $gte: new Date(req.params.checkOut) }
						},
						{
							startDate: { $lt: new Date(req.params.checkIn) },
							startDate: { $lt: new Date(req.params.checkOut) },
							endDate: { $lt: new Date(req.params.checkOut) },
							endDate: { $gte: new Date(req.params.checkIn) }
						}
					]
				})
				.populate('hotel')
				.exec(function(err, offers) {
					if (err)
						res.send(err);

					var pattern = '^.*?' + req.params.cidade + '.*?$';
					var re = new RegExp(pattern, 'gi');
					var result = [];

					offers.forEach(function(entity) {
						if (entity.hotel.city.match(re))
							result.push(entity);
					});

					res.json(result);
				});
		});
}
