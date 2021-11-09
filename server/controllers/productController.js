const shoe = require('../models/shoesModel')
const screen = require('../models/screenModel')
const game = require('../models/gameModel')
const bag = require('../models/bagModel')
const blazer = require('../models/blazerModel')
const watch = require('../models/watchModel')
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

const getAllShoes = async (req,res) =>{
    try{
        const shoes = await shoe.find({});

        res.json(shoes);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getShoeById = async (req,res) =>{
    try{
        const shoeId = await shoe.findById(req.params.id);

        res.json(shoeId);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getAllScreens = async (req,res) =>{
    try{
        const screens = await screen.find({});

        res.json(screens);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getScreenById = async (req,res) =>{
    try{
        const screenId = await screen.findById(req.params.id);

        res.json(screenId);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getAllGames = async (req,res) =>{
    try{
        const games = await game.find({});

        res.json(games);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getGameById = async (req,res) =>{
    try{
        const gameId = await game.findById(req.params.id);

        res.json(gameId);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getAllBags = async (req,res) =>{
    try{
        const bags = await bag.find({});

        res.json(bags);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getBagById = async (req,res) =>{
    try{
        const bagId = await bag.findById(req.params.id);

        res.json(bagId);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getAllBlazers = async (req,res) =>{
    try{
        const blazers = await blazer.find({});

        res.json(blazers);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getBlazerById = async (req,res) =>{
    try{
        const blazerId = await blazer.findById(req.params.id);

        res.json(blazerId);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getAllWatches = async (req,res) =>{
    try{
        const watches = await watch.find({});

        res.json(watches);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getWatchById = async (req,res) =>{
    try{
        const watchId = await watch.findById(req.params.id);

        res.json(watchId);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

module.exports = {
    getAllProducts,
    getProductsByType,
    addNewProduct,
    getAllShoes,
    getShoeById,
    getAllScreens,
    getScreenById,
    getAllGames,
    getGameById,
    getAllBags,
    getBagById,
    getAllBlazers,
    getBlazerById,
    getAllWatches,
    getWatchById


}