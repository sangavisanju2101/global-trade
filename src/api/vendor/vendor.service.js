const Vendor = require('../../models/vendor');

const getVendor= (req,res) => {
    try{
        return Vendor.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getVendorById=(req,res) => {
    try{
        return Vendor.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveVendor= (req) => {
    try{
        var vendor = new Vendor(req.body);
        return vendor.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateVendor = (req)=> {
    try{
        return Vendor.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteVendor= (req) =>{
    try{
        return Vendor.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getVendor : getVendor,
    getVendorById : getVendorById,
    saveVendor : saveVendor,
    updateVendor : updateVendor,
    deleteVendor : deleteVendor
}