var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelSchema = new Schema({
    nome: String,
    cidade: String,
    disponivelDe: Date,
    disponivelAte: Date
});

module.exports = mongoose.model('Hotel', HotelSchema);