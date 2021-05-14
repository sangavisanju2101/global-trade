const express = require("express"); 
const router = express.Router(); 
const controller = require('./user.contoller'); 

router.get('/', controller.getUser); //to get all the data's
router.get('/:id', controller.getUserById); //to get data by ID
router.post('/', controller.saveUser); //to insert table data
router.put('/:id', controller.updateUser); //to update the table
router.delete('/:id', controller.deleteUser); //to delete 


module.exports = router; 