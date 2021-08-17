require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db')
const errorHandler = require('./middleware/error')

const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userAuth = require('./routes/auth');
const privateAuth = require('./routes/private')

connectDB.on('error',()=>{
    console.log('error')
})

app.use(express.json()); // JSON יכולת לקרוא ולהציג מידע מ
app.use(express.urlencoded({extended:true})); // params יכולת לשלוף מידע מ
app.use(cors());

app.use('/products',productRoutes)
app.use('/userauth',userAuth)
app.use('/api/private',privateAuth)

// Error Handler 
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))