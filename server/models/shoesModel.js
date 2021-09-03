const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
    type:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    countInStock: {
        type: Number,
        required:true
    },
    imageUrl: {
        type: String,
        required:true
    }
})

const shoes = mongoose.model('shoe',shoesSchema);

module.exports = shoes;