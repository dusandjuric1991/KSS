const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema({
    title: String,
    location: String,
    price: Number,
    description: String,
    date: String,
    picture: String
});

const Ad = mongoose.model('ad', AdSchema);

module.exports = Ad;