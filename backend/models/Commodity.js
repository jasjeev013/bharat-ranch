const mongoose = require('mongoose');

const commoditySchema = new mongoose.Schema({
  user_email: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  price: { type: Number, required: true },
  min_qty: { type: Number, required: true },
  total_qty: { type: Number, required: true },
  date: {type: Date, default: Date.now },
  categories: {type: [String], required: true}
});

module.exports = mongoose.model('Commodity', commoditySchema);
