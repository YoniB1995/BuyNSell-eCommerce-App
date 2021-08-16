const express = require('express');
const router = express.Router();
const {forgotPassword , loginUser ,registerUser,resetPassword} = require('../controllers/auth')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/forgotpass',forgotPassword)
router.put('/resetpass/:resetToken',resetPassword)

module.exports = router;