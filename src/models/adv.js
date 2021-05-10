const mongoose = require('mongoose');
const validator = require('validator');
const AdvSchema = new mongoose.Schema({
    title : {
        type : String, 
        required : true,
        trim : true
    }, 
    description : {
        type : String, 
        required : true,
        trim : true
    }, 
    target_url : {
        type : String,
        required : true,
        trim : true
    }
}, {
    timestamps : true
})
const Adv = mongoose.model("Adv", AdvSchema); 
module.exports = Adv; 