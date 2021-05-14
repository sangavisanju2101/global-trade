const service = require('./wishlist.service');

const getWishlist = (req,res) => {
    service.getWishlist(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getWishlistById = (req,res) => {
    service.getWishlistById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveWishlist = (req,res) => {
    service.saveWishlist(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateWishlist = (req,res) => {
    service.updateWishlist(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteWishlist = (req,res) => {
    service.deleteWishlist(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}
module.exports = {
    getWishlist : getWishlist,
    getWishlistById : getWishlistById,
    saveWishlist : saveWishlist,
    updateWishlist : updateWishlist,
    deleteWishlist : deleteWishlist
}