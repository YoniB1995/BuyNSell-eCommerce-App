require('dotenv').config();
const connectDB= require('./db');

const productsData = require('./data/products');
const screenData = require('./data/screens');
const shoesData = require('./data/shoes');

const product = require('./models/productModel');
const screen = require('./models/screenModel');
const shoes = require('./models/shoesModel');


const importData = async () => {
    try{
    await product.deleteMany({});
    await product.insertMany(productsData);

    await screen.deleteMany({});
    await screen.insertMany(screenData);

    await shoes.deleteMany({});
    await shoes.insertMany(shoesData);


    console.log("data import success")

    process.exit();
    }
    catch(error){
        console.error("Error with data import")
        process.exit(1);
    }
}

// module.exports = importData();