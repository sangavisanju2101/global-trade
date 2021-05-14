const service = require('./state.service');

const getState = (req,res) => {
    service.getState(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getStateById = (req,res) => {
    service.getStateById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveState = (req,res) => {
    service.saveState(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateState = (req,res) => {
    service.updateState(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteState = (req,res) => {
    service.deleteState(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getState : getState,
    getStateById : getStateById,
    saveState : saveState,
    updateState : updateState,
    deleteState : deleteState
}