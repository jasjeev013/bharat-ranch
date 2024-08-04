const mongoose = require('mongoose');

const borrowRequestSchema = new mongoose.Schema({
  equipment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment', required: true },
  user_email: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
  time_period: { type: String, required: true },
  qty: { type: Number, required: true },
  status: { type: String, enum: ['accepted', 'pending','rejected'], required: true },
  start_date: { type: Date ,default: Date.now },
});

module.exports = mongoose.model('BorrowRequest', borrowRequestSchema);
