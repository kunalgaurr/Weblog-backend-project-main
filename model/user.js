const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { boolean } = require('webidl-conversions');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlenght: [20, 'Username cannot exceed 20 characters'],
  },
  name: {
    type: String,
    required: true,
    maxlength: [20, 'Name cannot exceed 20 characters'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  phone: {
    type: Number,
    required: true,
    maxlength: [10, 'Please enter a valid phone number'],
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
