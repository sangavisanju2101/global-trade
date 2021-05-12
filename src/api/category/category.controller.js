const getCategory= (req,res) => {
    res.status(200).send("get category"); 
}

const saveCategory = (req,res) => {
    res.status(201).send("save category");
}

const updateCategory = (req,res) => {
    res.status(201).send("update category");
}

const deleteCategory = (req,res) => {
    res.status(200).send("delete category");
}

module.exports = {
    getCategory : getCategory,
    saveCategory : saveCategory,
    updateCategory : updateCategory,
    deleteCategory : deleteCategory
}