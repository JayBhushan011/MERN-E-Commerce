const router = require('express').Router();
let User = require('../models/user.model');
var user = "118094709362044179436";
//var user;

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

router.route('/addAddress').post( (req,res) =>{
  var userGoogleId = user;
  var add1 = req.body.address.add1;
  var add2 = req.body.address.add2;
  var city = req.body.address.city;
  var state = req.body.address.state;
  var zcode = req.body.address.zcode;
  var mobile = req.body.address.mobile;
  var address = {add1: add1, add2: add2, city: city, state: state, zcode: zcode, mobile: mobile};

  User.findOne({
    googleId : userGoogleId
  }, async function(err, object){
    object.address.push(address);
    await object.save()
    .then(() => res.json('Address Added'))
    .catch(err => res.status(400).json('Error: ' + err));
    });
});

router.route('/getAddress').get( (req,res) =>{
  var userGoogleId = user;

  User.findOne({
    googleId : userGoogleId
  },function(err, object){
    res.send(object.address);
    });
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

// router.route('/addToCart').post( (req,res) => {
//   var userGoogleId = user;
//   var productId = req.body.productId;
//   var quantity = req.body.quantity;
//   var newCartItem = {productId : productId, quantity: quantity};
//   var i = 0;
//   var j = 0;
//   User.findOne({
//     googleId : userGoogleId
//   }, async function(err, object){
//     for (var x in object.cart){
//       i = i + 1;
//       console.log(x);
//       if (x.productId === productId){
//         let q = parseInt(x.quantity);
//         let qTwo = parseInt(quantity);
//         q = q + qTwo
//         q = q.toString()
//         var oldCartItem = {productId : productId, quantity: q};
//         object.cart.push(oldCartItem);
//         object.cart.splice(i);
//         console.log(object);
//         object.save()
//         .then(() => res.json('Updated cart!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//       }
//       else{
//         j = j + 1;
//       }
//     }
//     if (j == object.cart.length){
//     object.cart.push(newCartItem);
//     console.log(object);
//     await object.save()
//     .then(() => res.json('Added to cart!'))
//     .catch(err => res.status(400).json('Error: ' + err));
//   }});
//   });

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

  if (user === " " || typeof user == 'undefined'){
    res.send("User is logged out. Please log in.");
  }
  else{
    User.findOne({
      googleId : userGoogleId
    }, function(err, object){
      res.send(object.cart)
      });
  }
});

router.route('/addToWishlist').post( (req,res) =>{
  var userGoogleId = user;
  var productId = req.body.productId;
  var newWishListItem = {productId : productId};
  User.findOne({
    googleId : userGoogleId
  }, async function(err, object){
    object.wishlist.push(newWishListItem);
    await object.save()
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

module.exports = router;
