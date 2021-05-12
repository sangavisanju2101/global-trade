const getProduct= (req,res) => {
    res.status(200).send("get product"); 
}

const saveProduct = (req,res) => {
    res.status(201).send("save product");
}

const updateProduct = (req,res) => {
    res.status(201).send("update product");
}

const deleteProduct = (req,res) => {
    res.status(200).send("delete product");
}

module.exports = {
    getProduct : getProduct,
    saveProduct : saveProduct,
    updateProduct : updateProduct,
    deleteProduct : deleteProduct
}