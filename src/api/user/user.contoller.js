const getUser= (req,res) => {
    res.status(200).send("get user"); 
}

const saveUser = (req,res) => {
    res.status(201).send("save user");
}

const updateUser = (req,res) => {
    res.status(201).send("update user");
}

const deleteUser = (req,res) => {
    res.status(200).send("delete user");
}

module.exports = {
    getUser : getUser,
    saveUser : saveUser,
    updateUser : updateUser,
    deleteUser : deleteUser
}