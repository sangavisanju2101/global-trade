const express = require("express"); 
const router = express.Router(); 
const controller = require('./wishlist.controller'); 

router.get('/', controller.getWishlist);
router.get('/:id', controller.getWishlistById);
router.post('/', controller.saveWishlist);
router.put('/:id', controller.updateWishlist);
router.delete('/:id', controller.deleteWishlist)

module.exports = router; 