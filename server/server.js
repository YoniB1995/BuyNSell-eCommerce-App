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
const mailRouter = require('./routes/eMailRouter')
const contactUsRouter = require('./routes/contactUsRouter')
const sgMail = require('@sendgrid/mail');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


connectDB.on('error',()=>{
    console.log('error')
})

app.use('/products',productRoutes)
app.use('/user',userRouter)
app.use('/mail',mailRouter)
app.use('/contactus',contactUsRouter)

app.use(errorHandler)

sgMail.setApiKey(process.env.API_KEY_SendGrid)

app.post('/sendMail',async (req,res)=> {
    const {email, subject, text} = req.body;
    const msg = {
    to: email,
    from:process.env.EMAIL_FROM,
    subject: subject,
    text: text
}

await sgMail.send(msg, (err,info)=> {
    if(err) throw err;
    console.log('Email Sent Success')
})
})





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
