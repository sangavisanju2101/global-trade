const getCart= (req,res) => {
    res.status(200).send("get cart"); 
}

const saveCart = (req,res) => {
    res.status(201).send("save cart");
}

const updateCart = (req,res) => {
    res.status(201).send("update cart");
}

const deleteCart = (req,res) => {
    res.status(200).send("delete cart");
}

module.exports = {
    getCart : getCart,
    saveCart : saveCart,
    updateCart : updateCart,
    deleteCart : deleteCart
}