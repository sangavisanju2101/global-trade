const mongoose = require('mongoose');
const validator = require('validator');
const OrderSchema = new mongoose.Schema({
    order_id : {
        type : String, 
        required : true,
        trim : true
    },
    user_id : {
        type : String, 
        required : true,
        trim : true
    },
    number_of_products : {
        type : Number,
        required : true,
        trim : true
    },
    total : {
        type : Number,
        required : true,
        trim : true
    },
    shipping_id : {
        type : String, 
        required : true,
        trim : true
    },
    status : {
        type : String, 
        reqired : true
    }    
}, {
    timestamps : true
})
const Order = mongoose.model("Order", OrderSchema); 
module.exports = Order; 