const service = require('./vendor.service');

const getVendor = (req,res) => {
    service.getVendor(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getVendorById = (req,res) => {
    service.getVendorById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveVendor = (req,res) => {
    service.saveVendor(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateVendor = (req,res) => {
    service.updateVendor(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteVendor = (req,res) => {
    service.deleteVendor(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getVendor : getVendor,
    getVendorById : getVendorById,
    saveVendor : saveVendor,
    updateVendor : updateVendor,
    deleteVendor : deleteVendor
}