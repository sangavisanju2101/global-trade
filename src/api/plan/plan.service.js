const Plan = require('../../models/plan');

const getPlan= (req,res) => {
    try{
        return Plan.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getPlanById=(req,res) => {
    try{
        return Plan.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const savePlan= (req) => {
    try{
        var plan = new Plan(req.body);
        return plan.save();
    }catch(err){
        throw new Error(err);
    }
}

const updatePlan = (req)=> {
    try{
        return Plan.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deletePlan= (req) =>{
    try{
        return Plan.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getPlan : getPlan,
    getPlanById : getPlanById,
    savePlan : savePlan,
    updatePlan : updatePlan,
    deletePlan : deletePlan
}