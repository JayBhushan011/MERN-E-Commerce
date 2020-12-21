const router = require('express').Router();

let Product = require('../models/product.model');



router.route('/getProduct').post( (req,res) => {
  var productId = Number(req.body.id);

  Product.findOne({id:productId}, function(err, object){
    console.log(object)
    res.send(object);
  });

  // Product.findById(productId, function(err, object){
  //   console.log(object);
  //   res.send(object);
  //   });

  });

module.exports = router;