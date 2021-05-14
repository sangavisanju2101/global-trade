const service = require('./payment.service');

const getPayment = (req,res) => {
    service.getPayment(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getPaymentById = (req,res) => {
    service.getPaymentById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const savePayment = (req,res) => {
    service.savePayment(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updatePayment = (req,res) => {
    service.updatePayment(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deletePayment = (req,res) => {
    service.deletePayment(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getPayment : getPayment,
    getPaymentById : getPaymentById,
    savePayment : savePayment,
    updatePayment : updatePayment,
    deletePayment : deletePayment
}