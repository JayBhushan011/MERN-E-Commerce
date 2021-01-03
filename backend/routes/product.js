const router = require('express').Router();

let Product = require('../models/product.model');
var price;

router.route('/').get((req, res) => {
  Product.find()
  .then(products => res.json(products))
  .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/priceCalculate').post( (req, res) => {
  price = req.body.total;
  res.send("Thanks")
})
router.route('/total').get( (req, res) => {
  res.send(price.toFixed(2))
})

router.route('/getBooks').get((req, res) => {
  Product.find( {Category : "Books" })
  .then(products => res.json(products))
  .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/getGames').get((req, res) => {
  Product.find( {Category : "Games" })
  .then(products => res.json(products))
  .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/getProduct').post( (req,res) => {
  var productId = Number(req.body.id);

  Product.findOne({id:productId}, function(err, object){
    res.send(object);
  });

  // Product.findById(productId, function(err, object){
  //   console.log(object);
  //   res.send(object);
  //   });

  });

module.exports = router;
