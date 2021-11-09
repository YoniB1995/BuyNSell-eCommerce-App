require('dotenv').config();
// const connectDB= require('./db');
// used for inserting api store data.

const gamesData = require('./data/games');
const screenData = require('./data/screens');
const shoesData = require('./data/shoes');
const watchesData = require('./data/watches')
const blazersData = require('./data/blazers')
const bagsData = require('./data/bags')

const product = require('./models/productModel')

const importData = async () => {
    try{
    
    // await product.insertMany(watchesData);
    // await product.insertMany(blazersData);
    // await product.insertMany(bagsData);
    // await product.insertMany(gamesData);
    // await product.insertMany(screenData);
    // await product.insertMany(shoesData);


    // console.log("data import success")

    // process.exit();
    }
    catch(error){
        console.error("Error with data import")
        process.exit(1);
    }
}

// module.exports = importData();