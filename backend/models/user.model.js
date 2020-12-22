const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema ({
  googleId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fName: {
    type: String,
    required: true,
  },
  cart: [{
    type: String,
    default: ' '
  }]
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
