const mongoose = require('mongoose');

const borrowRequestSchema = new mongoose.Schema({
  equipment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipment', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  time_period: { type: String, required: true }
});

module.exports = mongoose.model('BorrowRequest', borrowRequestSchema);
