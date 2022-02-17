var express = require('express');
var router = express.Router();
let servicesController = require('../controllers/services')

/* GET users listing. */
router.get('/', servicesController.services);

/* GET users listing. */
// router.get('/rushin', userController.rushin);

module.exports = router;
