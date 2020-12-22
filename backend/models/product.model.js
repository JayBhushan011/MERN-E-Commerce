const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const productSchema = new Schema ({

simgurl : String,
limgurl : String,
imgwidth : Number,
imgheight : Number,
brand: String,
age: String,
feature1:String,
feature2: String,
feature3 : String,
genre : String,
price: Number,

model : String,
title: String,
ranking : Number,
warranty : String
},
{collection : "Product"}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;