require('dotenv').config();


const productsData = require('./data/products');
const connectDB= require('./db');
const product = require('./models/product');


const importData = async () => {
    try{
    await product.deleteMany({});

    await product.insertMany(productsData);

    console.log("data import success")

    process.exit();
    }
    catch(error){
        console.error("Error with data import")
        process.exit(1);
    }
}

importData();