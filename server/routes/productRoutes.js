const express= require('express');
const router = express.Router();
const {getAllScreens,getAllShoes,getScreenById,getShoeById,getAllGames,getGameById,  getAllBags,getBagById,getAllBlazers,getBlazerById,getAllWatches,getWatchById } = require('../controllers/productController')

router.get('/screens',getAllScreens)
router.get('/screen/:id',getScreenById)

router.get('/shoes',getAllShoes)
router.get('/shoe/:id',getShoeById)

router.get('/games',getAllGames)
router.get('/game/:id',getGameById)

router.get('/bags',getAllBags)
router.get('/bag/:id',getBagById)

router.get('/blazers',getAllBlazers)
router.get('/blazer/:id',getBlazerById)

router.get('/watches',getAllWatches)
router.get('/watch/:id',getWatchById)




module.exports = router;