const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  commodities: [{
    commodity_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Commodity', required: true },
    quantity: { type: Number, required: true }
  }]
});

module.exports = mongoose.model('Cart', cartSchema);
