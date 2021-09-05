require('dotenv').config();
// const connectDB= require('./db');
// used for inserting api store data.

const gamesData = require('./data/games');
const screenData = require('./data/screens');
const shoesData = require('./data/shoes');
const watchesData = require('./data/watches')
const blazersData = require('./data/blazers')
const bagsData = require('./data/bags')

const screen = require('./models/screenModel');
const shoes = require('./models/shoesModel');
const game = require('./models/gameModel')
const watch = require('./models/watchModel');
const blazer = require('./models/blazerModel');
const bag = require('./models/bagModel')

const importData = async () => {
    try{
    
    // await watch.deleteMany({});
    // await watch.insertMany(watchesData);

    // await blazer.deleteMany({});
    // await blazer.insertMany(blazersData);

    // await bag.deleteMany({});
    // await bag.insertMany(bagsData);


    // console.log("data import success")

    // process.exit();
    }
    catch(error){
        console.error("Error with data import")
        process.exit(1);
    }
}

// module.exports = importData();