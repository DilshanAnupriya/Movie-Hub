const express = require('express');
const router = express.Router();
const userController= require('../Controller/UserController');

router.post('/login', userController.login);
router.post('/signup',userController.SignUp);
router.get('/',userController.GetAllUsers);

module.exports = router;