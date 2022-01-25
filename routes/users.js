const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);
//Adding route for sign in page
router.get('/sign-in', usersController.signIn);

//Adding route for sign up page
router.get('/sign-up', usersController.signUp);

router.post('/create', usersController.create);

module.exports = router;

