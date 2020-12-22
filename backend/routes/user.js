const router = require('express').Router();
const bodyParser = require("body-parser");
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  res.send(req.user);
});

router.route('/add').post((req, res) => {
  const googleId = req.body.googleId;
  const fName = req.body.fName;
  const email = req.body.email;

  console.log(googleId);

  User.findOne({
    googleId: googleId
  }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {

      const newUser = new User({
        googleId,
        email,
        fName
      });
      newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
  });
});

router.route('/addToCart').post( (req,res) => {
  var userGoogleId = req.body.userGoogleId;
  var productId = req.body.productId;
  console.log(userGoogleId);

  User.findOne({
    googleId : userGoogleId
  }, function(err, object){
    console.log(object);
    object.cart.push(productId);
    object.save()
    .then(() => res.json('Added to cart!'))
    .catch(err => res.status(400).json('Error: ' + err));
    });

  });

module.exports = router;
