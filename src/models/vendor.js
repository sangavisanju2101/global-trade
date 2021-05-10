const mongoose = require('mongoose');
const validator = require('validator');
const VendorSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
        trim : true
    }, 
    company_name : {
        type : String, 
        required : true,
        trim : true
    }, 
    plan_id : {
        type : String, 
        required : true,
        trim : true
    }, 
    verified_vendor: {
        type : Boolean, 
        required : true,
        default : false
    }, 
    email : {
        type : String, 
        reqired : true, 
        trim : true, 
        unique : true, 
        lowercase : true, 
        validate : function(value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter valid email address');
            }
        }
    },
    password : {
        type : String,
        trim : true,
        reqired : true, 
        minlength : 8,
        validate : function(value){
            if(value.includes('password')){
                throw new Error("Password shouldn't contain the word password")
            }
        }
    },
    status : {
        type : String, 
        reqired : true
    }    
}, {
    timestamps : true
}); 
const Vendor = mongoose.model("Vendor", VendorSchema); 
module.exports = Vendor; 