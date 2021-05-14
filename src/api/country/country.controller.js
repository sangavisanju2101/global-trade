const service = require('./country.service');

const getCountry = (req,res) => {
    service.getCountry(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getCountryById = (req,res) => {
    service.getCountryById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveCountry = (req,res) => {
    service.saveCountry(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateCountry = (req,res) => {
    service.updateCountry(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteCountry = (req,res) => {
    service.deleteCountry(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getCountry : getCountry,
    getCountryById : getCountryById,
    saveCountry : saveCountry,
    updateCountry : updateCountry,
    deleteCountry : deleteCountry
}