const mongoose = require('mongoose');
const validator = require('validator');
const StateSchema = new mongoose.Schema({
    country_id : {
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
const State = mongoose.model("State", StateSchema); 
module.exports = State; 