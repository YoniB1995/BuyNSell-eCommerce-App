require('dotenv').config();
const connectDB= require('./db');

const productsData = require('./data/products');

const product = require('./models/product');
const screen = require('./models/screen');


const importData = async () => {
    try{
    await product.deleteMany({});
    await product.insertMany(productsData);

    await screen.deleteMany({});


    console.log("data import success")

    process.exit();
    }
    catch(error){
        console.error("Error with data import")
        process.exit(1);
    }
}

importData();