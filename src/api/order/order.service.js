const Order = require('../../models/order');

const getOrder= (req,res) => {
    try{
        return Order.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getOrderById=(req,res) => {
    try{
        return Order.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveOrder= (req) => {
    try{
        var order = new Order(req.body);
        return order.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateOrder = (req)=> {
    try{
        return Order.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteOrder= (req) =>{
    try{
        return Order.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getOrder : getOrder,
    getOrderById : getOrderById,
    saveOrder : saveOrder,
    updateOrder : updateOrder,
    deleteOrder : deleteOrder
}