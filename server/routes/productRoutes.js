const express= require('express');
const router = express.Router();
const {getAllScreens,getAllShoes,getScreenById,getShoeById,getAllGames,getGameById } = require('../controllers/productCtrl')

router.get('/screens',getAllScreens)
router.get('/screen/:id',getScreenById)

router.get('/shoes',getAllShoes)
router.get('/shoe/:id',getShoeById)

router.get('/games',getAllGames)
router.get('/game/:id',getGameById)




module.exports = router;