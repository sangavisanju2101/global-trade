const getOrder= (req,res) => {
    res.status(200).send("get order"); 
}

const saveOrder = (req,res) => {
    res.status(201).send("save order");
}

const updateOrder = (req,res) => {
    res.status(201).send("update order");
}

const deleteOrder = (req,res) => {
    res.status(200).send("delete order");
}

module.exports = {
    getOrder : getOrder,
    saveOrder : saveOrder,
    updateOrder : updateOrder,
    deleteOrder : deleteOrder
}