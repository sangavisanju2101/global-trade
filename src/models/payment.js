const mongoose = require('mongoose');
const validator = require('validator');
const PaymentSchema = new mongoose.Schema({
    user_id : {
        type : String, 
        required : true,
        trim : true
    },
    order_id : {
        type : String, 
        required : true,
        trim : true
    },
    paid_amount : {
        type : Number, 
        required : true,
        trim : true
    },
    transaction_number : {
        type : Number, 
        required : true,
        trim : true
    }
}, {
    timestamps : true
})
const Payment = mongoose.model("Payment", PaymentSchema); 
module.exports = Payment; 