const express = require("express"); 
const router = express.Router(); 
const controller = require('./review.controller'); 

router.get('/', controller.getReview);
router.get('/:id', controller.getReviewById);
router.post('/', controller.saveReview);
router.put('/:id', controller.updateReview);
router.delete('/:id', controller.deleteReview)

module.exports = router; 