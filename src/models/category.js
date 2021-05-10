const mongoose = require('mongoose');
const validator = require('validator');
const CategorySchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
        trim : true
    }
}, {
    timestamps : true
})
const Category = mongoose.model("Category", CategorySchema); 
module.exports = Category; 