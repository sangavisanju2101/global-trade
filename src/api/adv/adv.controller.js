const getAdv = (req,res) => {
    res.status(200).send("get advertisement");
}

const saveAdv = (req,res) => {
    res.status(201).send("save advertisement");
}

const updateAdv = (res,req) => {
    res.status(201).send("update advertisement");
}

const deleteAdv = (req,res) => {
    res.status(200).send("delete advertisement");
}

module.exports = {
    getAdv : getAdv,
    saveAdv : saveAdv,
    updateAdv : updateAdv,
    deleteAdv : deleteAdv
}