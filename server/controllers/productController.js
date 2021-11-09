const product = require('../models/productModel')

const getAllProducts = async (req,res) => {
    try {
        const products = await product.find({});
        res.json(products);

    } catch(err) {
        console.log(err);
         res.status(500).json({message:"Server Error"});
    }
}

const getProductsByType = async (req,res) => {
    try {
        const productsByType = await product.find({type:req.params.type});
        res.json(productsByType);

    } catch(err) {
        console.log(err);
         res.status(500).json({message:"Server Error"});
    }
}

const addNewProduct = async (req,res) => {
    const {id,type,name,imageUrl,description,price,countInStock} = req.body;

    try{
        const newProduct = await product.insertOne({id:id,type:type,name:name,imageUrl:imageUrl,description:description,price:price,countInStock:countInStock});

        res.json({status:'product added!',product:newProduct});
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
    getProductsByType,
    addNewProduct,
    getProductById


}