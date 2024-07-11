const mongoose = require('mongoose');

const buyRequestSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  commodity_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Commodity', required: true },
  qty: { type: Number, required: true }
});

module.exports = mongoose.model('BuyRequest', buyRequestSchema);
