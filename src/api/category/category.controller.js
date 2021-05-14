const service = require('./category.service');

const getCategory = (req,res) => {
    service.getCategory(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getCategoryById = (req,res) => {
    service.getCategoryById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveCategory = (req,res) => {
    service.saveCategory(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateCategory = (req,res) => {
    service.updateCategory(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteCategory = (req,res) => {
    service.deleteCategory(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}
module.exports = {
    getCategory : getCategory,
    getCategoryById, getCategoryById,
    saveCategory : saveCategory,
    updateCategory : updateCategory,
    deleteCategory : deleteCategory
}