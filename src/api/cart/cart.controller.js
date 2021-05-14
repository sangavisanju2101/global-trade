const service = require('./cart.service');

const getCart = (req,res) => {
    service.getCart(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getCartById = (req,res) => {
    service.getCartById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveCart = (req,res) => {
    service.saveCart(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateCart = (req,res) => {
    service.updateCart(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteCart = (req,res) => {
    service.deleteCart(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getCart : getCart,
    getCartById : getCartById,
    saveCart : saveCart,
    updateCart : updateCart,
    deleteCart : deleteCart
}