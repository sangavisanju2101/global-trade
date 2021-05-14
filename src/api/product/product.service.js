const Product = require('../../models/product');

const getProduct= (req,res) => {
    try{
        return Product.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getProductById=(req,res) => {
    try{
        return Product.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveProduct= (req) => {
    try{
        var product = new Product(req.body);
        return product.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateProduct = (req)=> {
    try{
        return Product.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteProduct= (req) =>{
    try{
        return Product.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getProduct : getProduct,
    getProductById : getProductById,
    saveProduct : saveProduct,
    updateProduct : updateProduct,
    deleteProduct : deleteProduct
}