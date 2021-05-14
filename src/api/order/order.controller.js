const service = require('./order.service');

const getOrder = (req,res) => {
    service.getOrder(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getOrderById = (req,res) => {
    service.getOrderById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveOrder = (req,res) => {
    service.saveOrder(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateOrder = (req,res) => {
    service.updateOrder(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteOrder = (req,res) => {
    service.deleteOrder(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getOrder : getOrder,
    getOrderById : getOrderById,
    saveOrder : saveOrder,
    updateOrder : updateOrder,
    deleteOrder : deleteOrder
}