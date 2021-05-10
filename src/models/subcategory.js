const mongoose = require('mongoose');
const validator = require('validator');
const SubcategorySchema = new mongoose.Schema({
    category_id : {
        type : String, 
        required : true,
        trim : true
    },
    name : {
        type : String, 
        required : true,
        trim : true
    }
}, {
    timestamps : true
})
const Subcategory = mongoose.model("Subcategory", SubcategorySchema); 
module.exports = Subcategory; 