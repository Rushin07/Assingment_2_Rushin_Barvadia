// Name: Rushin Barvadia
// StudentID: 301227529
//Assingment_2
// Date: 2022-02-17

var express = require('express');
var router = express.Router();
let servicesController = require('../controllers/services')

/* GET service listing. */
router.get('/', servicesController.services);

module.exports = router;
