const express = require('express');


const router = express.Router();
const homeController = require('../controllers/home_controller')
//ye hamne likha tha -> const homeController = require('../controllers/home_controller')
console.log('router loaded');

router.get('/',homeController.home);
// ye hamne likha tha -> router.get('/',homeController.home);

module.exports = router;
