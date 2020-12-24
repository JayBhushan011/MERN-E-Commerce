const router = require('express').Router();
let User = require('../models/user.model');
var user;

router.route('/').get((req, res) => {
  res.send(req.user);
});

router.route('/add').post((req, res) => {
  const googleId = req.body.googleId;
  const fName = req.body.fName;
  const email = req.body.email;


  user = googleId;


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
  console.log(user);
});

router.route('/logout').get( (req,res) => {
  user = " ";
  console.log("user is" + user + "log out" );

});

router.route('/checkLogIn').get( (req,res) => {
  console.log("user is logged out " + user);
  if (user === " " || typeof user == 'undefined'){
    res.send("User is logged out");
  }
  else{
    res.send("User is logged in");
  }
})

router.route('/addToCart').post( (req,res) => {
  var userGoogleId = user;
  var productId = req.body.productId;

  User.findOne({
    googleId : userGoogleId
  }, function(err, object){
    object.cart.push(productId);
    console.log(object);
    object.save()
    .then(() => res.json('Added to cart!'))
    .catch(err => res.status(400).json('Error: ' + err));
    });

  });

module.exports = router;
