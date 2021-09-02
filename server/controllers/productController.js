const shoe = require('../models/shoesModel')
const screen = require('../models/screenModel')
const game = require('../models/gameModel')

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

module.exports = {
    getAllShoes,
    getShoeById,
    getAllScreens,
    getScreenById,
    getAllGames,
    getGameById


}