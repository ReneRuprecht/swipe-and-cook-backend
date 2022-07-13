const express = require('express');
const router = express();

const userController = require('../controller/user.controller');
const { getUserByEmailMiddleware } = require('../middleware/get-user-by-email.middleware');

router.get('/',
    getUserByEmailMiddleware,
    userController.getUserByEmail);

router.post('/', userController.createUser);


module.exports = router;