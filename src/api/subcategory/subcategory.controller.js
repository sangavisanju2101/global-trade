const service = require('./subcategory.service');

const getSubcategory = (req,res) => {
    service.getSubcategory(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getSubcategoryById = (req,res) => {
    service.getSubcategoryById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveSubcategory = (req,res) => {
    service.saveSubcategory(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateSubcategory = (req,res) => {
    service.updateSubcategory(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteSubcategory = (req,res) => {
    service.deleteSubcategory(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getSubcategory : getSubcategory,
    getSubcategoryById : getSubcategoryById,
    saveSubcategory : saveSubcategory,
    updateSubcategory : updateSubcategory,
    deleteSubcategory : deleteSubcategory
}