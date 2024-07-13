const mongoose = require('mongoose');

const buyRequestSchema = new mongoose.Schema({
  user_email: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
  commodity_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Commodity', required: true },
  quantity: { type: Number, required: true },
  status: { type: String, enum: ['accepted', 'pending', 'rejected'], required: true },
});

module.exports = mongoose.model('BuyRequest', buyRequestSchema);
