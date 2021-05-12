const getPlan= (req,res) => {
    res.status(200).send("get plan"); 
}

const savePlan = (req,res) => {
    res.status(201).send("save plan");
}

const updatePlan = (req,res) => {
    res.status(201).send("update plan");
}

const deletePlan = (req,res) => {
    res.status(200).send("delete plan");
}

module.exports = {
    getPlan : getPlan,
    savePlan : savePlan,
    updatePlan : updatePlan,
    deletePlan : deletePlan
}