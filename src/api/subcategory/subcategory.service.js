const Subcategory = require('../../models/subcategory');

const getSubcategory= (req,res) => {
    try{
        return Subcategory.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getSubcategoryById=(req,res) => {
    try{
        return Subcategory.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveSubcategory= (req) => {
    try{
        var subcategory = new Subcategory(req.body);
        return subcategory.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateSubcategory = (req)=> {
    try{
        return Subcategory.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteSubcategory= (req) =>{
    try{
        return Subcategory.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getSubcategory : getSubcategory,
    getSubcategoryById : getSubcategoryById,
    saveSubcategory : saveSubcategory,
    updateSubcategory : updateSubcategory,
    deleteSubcategory : deleteSubcategory
}