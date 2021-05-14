const State = require('../../models/state');

const getState= (req,res) => {
    try{
        return State.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getStateById=(req,res) => {
    try{
        return State.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveState= (req) => {
    try{
        var state = new State(req.body);
        return state.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateState = (req)=> {
    try{
        return State.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteState= (req) =>{
    try{
        return State.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getState : getState,
    getStateById : getStateById,
    saveState : saveState,
    updateState : updateState,
    deleteState : deleteState
}