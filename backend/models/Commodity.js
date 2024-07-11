const mongoose = require('mongoose');

const commoditySchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  price: { type: Number, required: true },
  min_qty: { type: Number, required: true },
  total_qty: { type: Number, required: true }
});

module.exports = mongoose.model('Commodity', commoditySchema);
