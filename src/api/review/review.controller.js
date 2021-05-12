const getReview= (req,res) => {
    res.status(200).send("get review"); 
}

const saveReview = (req,res) => {
    res.status(201).send("save review");
}

const updateReview = (req,res) => {
    res.status(201).send("update review");
}

const deleteReview = (req,res) => {
    res.status(200).send("delete review");
}

module.exports = {
    getReview : getReview,
    saveReview : saveReview,
    updateReview : updateReview,
    deleteReview : deleteReview
}