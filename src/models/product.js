const mongoose = require('mongoose');
const validator = require('validator');
const ProductSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
        trim : true
    }, 
    vendor_id : {
        type : String,
        required : true,
        trim : true
    },
    status : {
        type : String, 
        reqired : true
    },
    quantity_available : {
        type : Number,
        reqired : true
    },
    description : {
        type : String, 
        required : true,
        trim : true
    }, 
    category_id : {
        type : String,
        required : true,
        trim : true
    },
    subcategory_id : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true
    }
}, {
    timestamps : true
})
const Product = mongoose.model("Product", ProductSchema); 
module.exports = Product; 