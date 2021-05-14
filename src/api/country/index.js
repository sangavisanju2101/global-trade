const express = require("express"); 
const router = express.Router(); 
const controller = require('./country.controller'); 

router.get('/', controller.getCountry);
router.get('/:id', controller.getCountryById);
router.post('/', controller.saveCountry);
router.put('/:id', controller.updateCountry);
router.delete('/:id', controller.deleteCountry)

module.exports = router; 