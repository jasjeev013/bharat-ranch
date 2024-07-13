const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  price: { type: Number, required: true },
  user_email: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
  qty: { type: Number, required: true },
});

module.exports = mongoose.model('Equipment', equipmentSchema);


// To be added Status which changes when someone borrows the equipemts and add qty also in this
// TO add the change of quantity int he but request