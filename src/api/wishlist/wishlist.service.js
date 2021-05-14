const Wishlist = require('../../models/wishlist');

const getWishlist= (req,res) => {
    try{
        return Wishlist.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getWishlistById=(req,res) => {
    try{
        return Wishlist.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveWishlist= (req) => {
    try{
        var wishlist = new Wishlist(req.body);
        return wishlist.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateWishlist = (req)=> {
    try{
        return Wishlist.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteWishlist= (req) =>{
    try{
        return Wishlist.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getWishlist : getWishlist,
    getWishlistById : getWishlistById,
    saveWishlist : saveWishlist,
    updateWishlist : updateWishlist,
    deleteWishlist : deleteWishlist
}