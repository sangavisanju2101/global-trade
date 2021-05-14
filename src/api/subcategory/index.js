const express = require("express"); 
const router = express.Router(); 
const controller = require('./subcategory.controller'); 

router.get('/', controller.getSubcategory);
router.get('/:id', controller.getSubcategoryById);
router.post('/', controller.saveSubcategory);
router.put('/:id', controller.updateSubcategory);
router.delete('/:id', controller.deleteSubcategory);

module.exports = router; 