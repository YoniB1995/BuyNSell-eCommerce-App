const express = require("express");
const router = express.Router();
const ROLE = process.env.ROLE
const { authRole } = require('../middleware/auth')
const { checkPassword, changePassword } = require('../middleware/changePassword')
const login = require("../middleware/login");
const logout = require("../middleware/logout");
const user = require('../controllers/userController');


router.get('/', user.getAllUsers);
router.get('/userById/:id', user.getUserById);
router.post('/', user.newUser);
router.post("/login", login);
router.post("/logout", logout);

router.put('/update', user.updateUser)
router.delete('/delete/:id', user.deleteUser)
router.put('/changePassword', checkPassword, changePassword);



module.exports = router;
