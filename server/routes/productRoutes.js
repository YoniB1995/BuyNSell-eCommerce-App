const express= require('express');
const productRouter = express.Router();
const {getProductById,addNewProduct,getAllProducts, getProductsByType } = require('../controllers/productController')

productRouter.get('/',getAllProducts)
productRouter.get('/:type',getProductsByType)
productRouter.get('/item/:id',getProductById)
productRouter.post('/',addNewProduct)




module.exports = productRouter;