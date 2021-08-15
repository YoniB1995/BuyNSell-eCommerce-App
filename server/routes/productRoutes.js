const express= require('express');
const router = express.Router();
const {getAllProducts , getProductById } = require('../controllers/productCtrl')

router.get('/',getAllProducts)


router.get('/:id',getProductById)


module.exports = router;