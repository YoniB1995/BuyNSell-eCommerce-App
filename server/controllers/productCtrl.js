const product = require('../models/shoesModel')

const getAllProducts = async (req,res) =>{
    try{
        const products = await product.find({});

        res.json(products);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getProductById = async (req,res) =>{
    try{
        const productId = await product.findById(req.params.id);

        res.json(productId);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

module.exports = {
    getAllProducts,
    getProductById
}