const getAddress = (req,res) => {
    res.status(200).send("get address"); 
}

const saveAddress = (req,res) => {
    res.status(201).send("save address");
}

const updateAddress = (req,res) => {
    res.status(201).send("update address");
}

const deleteAddress = (req,res) => {
    res.status(201).send("delete address");
}

module.exports = {
    getAddress : getAddress,
    saveAddress : saveAddress,
    updateAddress : updateAddress,
    deleteAddress : deleteAddress
}