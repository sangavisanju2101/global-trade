const express = require("express"); 
const router = express.Router(); 
const controller = require('./admin.controller'); 

router.get('/', controller.getAdmin);
router.get('/add', controller.saveAdmin);
router.get('/edit/:id', controller.updateAdmin);
router.get('/:id', controller.getAdminById);
router.delete('/:id', controller.deleteAdmin)

module.exports = router; 