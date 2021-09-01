const express= require('express');
const router = express.Router();
const {getAllScreens,getAllShoes,getScreenById,getShoeById } = require('../controllers/productCtrl')

router.get('/screens',getAllScreens)
router.get('/screen/:id',getScreenById)

router.get('/shoes',getAllShoes)
router.get('/shoe/:id',getShoeById)




module.exports = router;