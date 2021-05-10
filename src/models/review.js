const mongoose = require('mongoose');
const validator = require('validator');
const ReviewSchema = new mongoose.Schema({
    product_id : {
        type : String, 
        required : true,
        trim : true
    },
    rating : {
        type : Number,
        required : true,
        trim : true
    },
    title : {
        type : String, 
        required : true,
        trim : true
    }, 
    description : {
        type : String, 
        required : true,
        trim : true
    }
}, {
    timestamps : true
})
const Review = mongoose.model("Review", ReviewSchema); 
module.exports = Review; 