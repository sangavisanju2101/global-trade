const service = require('./review.service');

const getReview = (req,res) => {
    service.getReview(req).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const getReviewById = (req,res) => {
    service.getReviewById(req).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

const saveReview = (req,res) => {
    service.saveReview(req).then((result)=> {
        res.status(201).send(result);
    }).catch((err)=> {
        res.status(500).send(err);
    })
}

const updateReview = (req,res) => {
    service.updateReview(req).then((result)=> {
        res.status(200).send("Record Updated Successfully...");
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const deleteReview = (req,res) => {
    service.deleteReview(req).the((result)=> {
        res.status(200).send("Record Deleted Successfully...");
    }).catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    getReview : getReview,
    getReviewById : getReviewById,
    saveReview : saveReview,
    updateReview : updateReview,
    deleteReview : deleteReview
}