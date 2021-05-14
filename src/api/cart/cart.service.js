const Cart = require('../../models/cart');

const getCart= (req,res) => {
    try{
        return Cart.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getCartById=(req,res) => {
    try{
        return Cart.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveCart= (req) => {
    try{
        var cart = new Cart(req.body);
        return cart.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateCart = (req)=> {
    try{
        return Cart.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteCart= (req) =>{
    try{
        return Cart.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getCart : getCart,
    getCartById : getCartById,
    saveCart : saveCart,
    updateCart : updateCart,
    deleteCart : deleteCart
}