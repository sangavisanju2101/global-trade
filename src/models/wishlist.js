const mongoose = require('mongoose');
const validator = require('validator');
const WishlistSchema = new mongoose.Schema({
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
const Wishlist = mongoose.model("Wishlist", WishlistSchema); 
module.exports = Wishlist; 