const express = require('express');
const router = express.Router();
const userController = require('./userController');

// POST /users/create
router.post('/create', userController.createUser);

module.exports = router;
