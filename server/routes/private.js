const express = require('express');
const router = express.Router();
const {getPrivateData} = require('../controllers/privateController')
const { protectAuth } = require('../middleware/auth')

router.route('/').get(protectAuth, getPrivateData);


module.exports = router;