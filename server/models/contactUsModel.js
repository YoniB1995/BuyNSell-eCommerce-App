const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    subject:{
        type: String,
        required:true
    },
    text: {
        type: String,
        required:true
    } , 
    createdAt: {
        type:  Date
        }

})

const contactUs = mongoose.model('contactUs',contactUsSchema);

module.exports = contactUs;