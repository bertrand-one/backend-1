const express = require('express');
const router = express.Router();
const {register, login,} = require('../controllers/auth-Controller'); // Assuming your controller is named itemController.js



// Authentication Routes
router.post('/register', register);
router.post('/login', login);

module.exports = router;