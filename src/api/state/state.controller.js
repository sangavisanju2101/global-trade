const getState= (req,res) => {
    res.status(200).send("get state"); 
}

const saveState = (req,res) => {
    res.status(201).send("save state");
}

const updateState = (req,res) => {
    res.status(201).send("update state");
}

const deleteState = (req,res) => {
    res.status(200).send("delete state");
}

module.exports = {
    getState : getState,
    saveState : saveState,
    updateState : updateState,
    deleteState : deleteState
}