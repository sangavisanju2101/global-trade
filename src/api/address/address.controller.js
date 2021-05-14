const service = require('./address.service');

const getAddress = (req,res) => {
    service.getAddress(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getAddressById = (req,res) => {
    service.getAddressById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveAddress = (req,res) => {
    service.saveAddress(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateAddress = (req,res) => {
    service.updateAddress(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteAddress = (req,res) => {
    service.deleteAddress(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getAddress : getAddress,
    getAddressById : getAddressById,
    saveAddress : saveAddress,
    updateAddress : updateAddress,
    deleteAddress : deleteAddress
}