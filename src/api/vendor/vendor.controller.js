const getVendor= (req,res) => {
    res.status(200).send("get vendor"); 
}

const saveVendor = (req,res) => {
    res.status(201).send("save vendor");
}

const updateVendor = (req,res) => {
    res.status(201).send("update vendor");
}

const deleteVendor = (req,res) => {
    res.status(200).send("delete vendor");
}

module.exports = {
    getVendor : getVendor,
    saveVendor : saveVendor,
    updateVendor : updateVendor,
    deleteVendor : deleteVendor
}