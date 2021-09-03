const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
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

const game = mongoose.model('game',gameSchema);

module.exports = game;