const Category = require('../../models/category');

const getCategory= (req,res) => {
    try{
        return Category.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getCategoryById=(req,res) => {
    try{
        return Category.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveCategory= (req) => {
    try{
        var category = new Category(req.body);
        return category.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateCategory = (req)=> {
    try{
        return Category.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteCategory= (req) =>{
    try{
        return Category.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getCategory : getCategory,
    getCategoryById, getCategoryById,
    saveCategory : saveCategory,
    updateCategory : updateCategory,
    deleteCategory : deleteCategory
}