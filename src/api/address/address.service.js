const Address = require('../../models/address')

const getAddress= (req,res) => {
    try{
        return Address.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getAddressById=(req,res) => {
    try{
        return Address.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveAddress= (req) => {
    try{
        var address = new Address(req.body);
        return address.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateAddress = (req)=> {
    try{
        return Address.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteAddress= (req) =>{
    try{
        return Address.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getAddress : getAddress,
    getAddressById : getAddressById,
    saveAddress : saveAddress,
    updateAddress : updateAddress,
    deleteAddress : deleteAddress
}