const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();


router.get('/', userController.getAllUsers);
router.get('/getoken', userController.getTokenAndConfig);
router.get('/:id', userController.getUserById);
router.post('/forgotpassword', userController.forgotPassword);
router.put('/resetpassword/:resetToken', userController.resetPassword);
router.post('/', userController.registerUser); // redirect route to /login
router.post('/login', userController.UserLogIn);
router.delete('/:username', userController.deleteUser);

module.exports = router;
