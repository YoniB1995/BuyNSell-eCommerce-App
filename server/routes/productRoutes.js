const express= require('express');
const productRouter = express.Router();
const {getAllScreens,getAllShoes,getScreenById,getShoeById,getAllGames,getGameById,  getAllBags,getBagById,getAllBlazers,getBlazerById,getAllWatches,getWatchById,addNewProduct,getAllProducts, getProductsByType } = require('../controllers/productController')

productRouter.get('/',getAllProducts)
productRouter.get('/:type',getProductsByType)
productRouter.post('/',addNewProduct)


productRouter.get('/screens',getAllScreens)
productRouter.get('/screen/:id',getScreenById)

productRouter.get('/shoes',getAllShoes)
productRouter.get('/shoe/:id',getShoeById)

productRouter.get('/games',getAllGames)
productRouter.get('/game/:id',getGameById)

productRouter.get('/bags',getAllBags)
productRouter.get('/bag/:id',getBagById)

productRouter.get('/blazers',getAllBlazers)
productRouter.get('/blazer/:id',getBlazerById)

productRouter.get('/watches',getAllWatches)
productRouter.get('/watch/:id',getWatchById)




module.exports = productRouter;