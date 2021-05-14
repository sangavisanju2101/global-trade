const Adv = require('../../models/adv');

const getAdv= (req,res) => {
    try{
        return Adv.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getAdvById=(req,res) => {
    try{
        return Adv.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveAdv= (req) => {
    try{
        var adv = new Adv(req.body);
        return adv.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateAdv = (req)=> {
    try{
        return Adv.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteAdv= (req) =>{
    try{
        return Adv.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getAdv : getAdv,
    getAdvById : getAdvById,
    saveAdv : saveAdv,
    updateAdv : updateAdv,
    deleteAdv : deleteAdv
}