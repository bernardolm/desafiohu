var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelSchema = new Schema({
	name: String,
	city: String,
	offers: [{ type: Schema.Types.ObjectId, ref: 'Offer' }]
});

module.exports = mongoose.model('Hotel', HotelSchema);