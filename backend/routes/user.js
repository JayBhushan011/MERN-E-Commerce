const router = require('express').Router();
let User = require('../models/user.model');
// var user = "118094709362044179436";
var user;

router.route('/').get((req, res) => {
  User.findOne( {googleId : user} )
    .then((user) => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const googleId = req.body.googleId;
  const fName = req.body.fName;
  const email = req.body.email;
  const imgUrl = req.body.imgUrl;


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
        fName,
        imgUrl
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
  var quantity = req.body.quantity;
  var newCartItem = {productId : productId, quantity: quantity};
  User.findOne({
    googleId : userGoogleId
  }, async function(err, object){
    object.cart.push(newCartItem);
    console.log(object);
    await object.save()
    .then(() => res.json('Added to cart!'))
    .catch(err => res.status(400).json('Error: ' + err));
    });
  });

router.route("/userCart").get( (req,res) => {
  var userGoogleId = user;

  User.findOne({
    googleId : userGoogleId
  }, function(err, object){
    res.send(object.cart)
    });
});

router.route('/addToWishlist').post( (req,res) =>{
  var userGoogleId = user;
  var productId = req.body.productId;
  var newWishListItem = {productId : productId};
  User.findOne({
    googleId : userGoogleId
  }, function(err, object){
    object.wishlist.push(newWishListItem);
    object.save()
    .then(() => res.json('Added to WishList'))
    .catch(err => res.status(400).json('Error: ' + err));
    });
});

router.route("/userWishList").get( (req,res) => {
  var userGoogleId = user;

  User.findOne({
    googleId : userGoogleId
  }, function(err, object){
    res.send(object.wishlist)
    });
});

router.route('/addAddress').post( (req,res) =>{
  var userGoogleId = user;
  var address = req.body.address;

  User.findOne({
    googleId : userGoogleId
  }, function(err, object){
    object.address.push(address);
    object.save()
    .then(() => res.json('Address Added'))
    .catch(err => res.status(400).json('Error: ' + err));
    });
});

router.route('/getAddress').get( (req,res) =>{
  var userGoogleId = user;

  User.findOne({
    googleId : userGoogleId
  }, function(err, object){
    res.send(object.address);
    });
});

module.exports = router;
