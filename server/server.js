require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const connectDB = require('./db')
const errorHandler = require('./middleware/error')
const PORT = process.env.PORT || 5000

const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRouter = require('./routes/userRouter');
const privateAuth = require('./routes/private')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


connectDB.on('error',()=>{
    console.log('error')
})


app.use('/products',productRoutes)
app.use('/user',userRouter)
app.use('/api/private',privateAuth)

app.use(errorHandler)


if (process.env.NODE_ENV === 'production'){ 
    app.use(express.static(path.join(__dirname,'../client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, '../client/build','index.html'))
    });
} else {
    app.get('/', (req,res) =>{
        res.send("Api running")
    })
}

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))
