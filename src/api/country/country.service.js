const Country = require('../../models/country');

const getCountry= (req,res) => {
    try{
        return Country.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getCountryById=(req,res) => {
    try{
        return Country.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveCountry= (req) => {
    try{
        var country = new Country(req.body);
        return country.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateCountry = (req)=> {
    try{
        return Country.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteCountry= (req) =>{
    try{
        return Country.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getCountry : getCountry,
    getCountryById : getCountryById,
    saveCountry : saveCountry,
    updateCountry : updateCountry,
    deleteCountry : deleteCountry
}