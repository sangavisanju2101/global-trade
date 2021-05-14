const Review = require('../../models/review');

const getReview= (req,res) => {
    try{
        return Review.find(req.query);
    } catch(err){
        throw new Error(err);
    }
}

const getReviewById=(req,res) => {
    try{
        return Review.findById(req.params.id,req.body);
    }catch{
        throw new Error(err);
    }
}

const saveReview= (req) => {
    try{
        var review = new Review(req.body);
        return review.save();
    }catch(err){
        throw new Error(err);
    }
}

const updateReview = (req)=> {
    try{
        return Review.findByIdAndUpdate(req.params.id,req.body);
    }catch(err){
        throw new Error(err); 
    }
}

const deleteReview= (req) =>{
    try{
        return Review.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err);  
    }
}

module.exports = {
    getReview : getReview,
    getReviewById : getReviewById,
    saveReview : saveReview,
    updateReview : updateReview,
    deleteReview : deleteReview
}