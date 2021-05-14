const express = require("express"); 
const router = express.Router(); 
const controller = require('./cart.controller'); 

router.get('/', controller.getCart);
router.get('/:id', controller.getCartById);
router.post('/', controller.saveCart);
router.put('/:id', controller.updateCart);
router.delete('/:id', controller.deleteCart)

module.exports = router; 