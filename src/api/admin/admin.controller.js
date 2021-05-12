const getAdmin= (req,res) => {
    res.status(200).send("get admin"); 
}

const saveAdmin = (req,res) => {
    res.status(201).send("save admin");
}

const updateAdmin = (req,res) => {
    res.status(201).send("update admin");
}

const deleteAdmin = (req,res) => {
    res.status(200).send("delete admin");
}

module.exports = {
    getAdmin : getAdmin,
    saveAdmin : saveAdmin,
    updateAdmin : updateAdmin,
    deleteAdmin : deleteAdmin
}