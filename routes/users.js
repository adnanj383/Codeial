const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

module.exports = router;



/*what I wrote for posts.js
const express = require('express');
const router = express.Router();


const postsController = require('../controllers/posts_controller');

router.get('/posts', postController.posts);




module.exports = router;
*/