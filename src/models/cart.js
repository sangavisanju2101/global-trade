const mongoose = require('mongoose');
const validator = require('validator');
const CartSchema = new mongoose.Schema({
    user_id : {
        type : String, 
        required : true,
        trim : true
    },
    number_of_products : {
        type : Number,
        required : true,
        trim : true
    }
}, {
    timestamps : true
})
const Cart = mongoose.model("Cart", CartSchema); 
module.exports = Cart; 