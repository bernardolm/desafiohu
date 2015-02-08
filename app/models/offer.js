var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfferSchema = new Schema({
	startDate: Date,
	endDate: Date,
	hotel: { type: Schema.Types.ObjectId, ref: 'Hotel' }
});

module.exports = mongoose.model('Offer', OfferSchema);