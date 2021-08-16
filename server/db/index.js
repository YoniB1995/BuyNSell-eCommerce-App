require('dotenv').config();
const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL
const MONGO_LOCAL_URL = process.env.MONGO_LOCAL_URL

const connectDB = async () => {
        await mongoose.connect('mongodb://localhost:27017',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:true
        });
}
connectDB().then(()=>{
    console.log('MongoDB Atlas Connected')
}).catch((err)=>{
    console.log(`Error Message - ${err.message}`)
})


module.exports = mongoose.connection;

