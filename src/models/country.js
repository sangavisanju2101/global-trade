const mongoose = require('mongoose');
const validator = require('validator');
const CountrySchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
        trim : true
    }
}, {
    timestamps : true
})
const Country = mongoose.model("Country", CountrySchema); 
module.exports = Country; 