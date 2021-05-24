const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();



// POST /login
router.post('/login', authController.login);



module.exports = router;