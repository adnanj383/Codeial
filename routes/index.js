const express = require('express');


const router = express.Router();
const homeController = require('../controllers/home_controller')
//ye hamne likha tha -> const homeController = require('../controllers/home_controller')
console.log('router loaded');

router.get('/',homeController.home);
router.use('/users', require('./users'));
// what i did for post page -> router.use('/posts',require('./posts'));
//router.use('/posts', require('./posts'));
//ye hamne likha tha -> router.get('/',homeController.home);
//for any further routes, access from here
//router.use('/routerName', require('./routerFile));

module.exports = router;
