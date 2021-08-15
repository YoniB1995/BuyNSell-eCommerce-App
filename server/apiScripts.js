require('dotenv').config();


const productsData = require('./data/products');
const connectDB = require('./db');
const product = require('./models/product');


const importData = async () => {
    await product.deleteMany({});

    await product.insertMany(productsData);

    console.log("data import success")
}

importData().then(()=>{
    "data imported success"
}).catch((error)=> console.log(`Error with data import - ${error.message}`))