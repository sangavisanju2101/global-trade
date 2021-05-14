const service = require('./adv.service');

const getAdv = (req,res) => {
    service.getAdv(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getAdvById = (req,res) => {
    service.getAdvById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveAdv = (req,res) => {
    service.saveAdv(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateAdv = (req,res) => {
    service.updateAdv(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteAdv = (req,res) => {
    service.deleteAdv(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getAdv : getAdv,
    getAdvById : getAdvById,
    saveAdv : saveAdv,
    updateAdv : updateAdv,
    deleteAdv : deleteAdv
}