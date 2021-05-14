const Payment = require('../../models/payment');

const getPayment= (req,res) => {
    try{
        return Payment.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getPaymentById=(req,res) => {
    try{
        return Payment.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const savePayment= (req) => {
    try{
        var payment = new Payment(req.body);
        return payment.save();
    }catch(err){
        throw new Error(err);
    }
}

const updatePayment = (req)=> {
    try{
        return Payment.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deletePayment= (req) =>{
    try{
        return Payment.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getPayment : getPayment,
    getPaymentById : getPaymentById,
    savePayment : savePayment,
    updatePayment : updatePayment,
    deletePayment : deletePayment
}