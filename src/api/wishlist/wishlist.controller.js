const getWishlist= (req,res) => {
    res.status(200).send("get wishlist"); 
}

const saveWishlist = (req,res) => {
    res.status(201).send("save wishlist");
}

const updateWishlist = (req,res) => {
    res.status(201).send("update wishlist");
}

const deleteWishlist = (req,res) => {
    res.status(200).send("delete wishlist");
}

module.exports = {
    getWishlist : getWishlist,
    saveWishlist : saveWishlist,
    updateWishlist : updateWishlist,
    deleteWishlist : deleteWishlist
}