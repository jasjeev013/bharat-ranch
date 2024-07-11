const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {type: String,required: true,unique: true},
  password: {type: String,required: true},
  name: { type: String, required: true },
  contact: { type: String, required: true },
  description: { type: String },
  address: { type: String },
  role: { type: String, enum: ['farmer', 'buyer'], required: true },
  image: { type: String }
});

module.exports = mongoose.model('User', userSchema);
