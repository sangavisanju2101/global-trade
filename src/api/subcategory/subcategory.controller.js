const getSubcategory= (req,res) => {
    res.status(200).send("get subcategory"); 
}

const saveSubcategory = (req,res) => {
    res.status(201).send("save subcategory");
}

const updateSubcategory = (req,res) => {
    res.status(201).send("update subcategory");
}

const deleteSubcategory = (req,res) => {
    res.status(200).send("delete subcategory");
}

module.exports = {
    getSubcategory : getSubcategory,
    saveSubcategory : saveSubcategory,
    updateSubcategory : updateSubcategory,
    deleteSubcategory : deleteSubcategory
}