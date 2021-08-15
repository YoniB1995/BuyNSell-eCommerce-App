require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db')
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

connectDB.on('error',()=>{
    console.log('error')
})

app.use(express.json()); // JSON יכולת לקרוא ולהציג מידע מ
app.use(express.urlencoded({extended:true})); // params יכולת לשלוף מידע מ
app.use(cors());

app.use('/products',productRoutes)


const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))