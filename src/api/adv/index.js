const express = require("express"); 
const router = express.Router(); 
const controller = require('./adv.controller');

router.get('/', controller.getAdv); 
router.post('/', controller.saveAdv);
router.put('/:id', controller.updateAdv);
router.delete('/:id', controller.deleteAdv);

module.exports = router;