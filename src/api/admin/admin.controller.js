const service = require('./admin.service');

const getAdmin = (req,res) => {
    service.getAdmin(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getAdminById = (req,res) => {
    service.getAdminById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveAdmin = (req,res) => {
    service.saveAdmin(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateAdmin = (req,res) => {
    service.updateAdmin(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteAdmin = (req,res) => {
    service.deleteAdmin(req).then((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getAdmin : getAdmin,
    getAdminById : getAdminById,
    saveAdmin : saveAdmin,
    updateAdmin : updateAdmin,
    deleteAdmin : deleteAdmin
}