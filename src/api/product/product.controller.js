const service = require('./product.service');

const getProduct = (req,res) => {
    service.getProduct(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getProductById = (req,res) => {
    service.getProductById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveProduct = (req,res) => {
    service.saveProduct(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateProduct = (req,res) => {
    service.updateProduct(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteProduct = (req,res) => {
    service.deleteProduct(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getProduct : getProduct,
    getProductById : getProductById,
    saveProduct : saveProduct,
    updateProduct : updateProduct,
    deleteProduct : deleteProduct
}