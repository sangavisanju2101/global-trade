const getPayment= (req,res) => {
    res.status(200).send("get payment"); 
}

const savePayment = (req,res) => {
    res.status(201).send("save payment");
}

const updatePayment = (req,res) => {
    res.status(201).send("update payment");
}

const deletePayment = (req,res) => {
    res.status(200).send("delete payment");
}

module.exports = {
    getPayment : getPayment,
    savePayment : savePayment,
    updatePayment : updatePayment,
    deletePayment : deletePayment
}