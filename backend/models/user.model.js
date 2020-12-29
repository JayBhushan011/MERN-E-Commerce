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
  imgUrl: { type: String, default: ' ' },
  address: [
    {
    type: String,
    default: ' '
  }
],
  wishlist: [ {
    productId:{type:String, default:' '}
  }
],
  cart: [
    {
    productId: {type: String,
    default: ' '},
    quantity: {type: String,
    default: ' '}
  }
]
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
