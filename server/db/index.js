require('dotenv').config();
const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL

const connectDB = async () => {
        await mongoose.connect("mongodb+srv://yoni:046344579@cluster0.b7rbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
}
connectDB().then(()=>{
    console.log('MongoDB Atlas Connected')
}).catch((err)=>{
    console.log(`Error Message - ${err.message}`)
})


module.exports = mongoose.connection;

