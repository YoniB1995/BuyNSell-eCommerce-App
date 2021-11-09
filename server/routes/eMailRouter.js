const express= require('express');
const emailRouter = express.Router();
const {getAllEmails , getEmailById,addNewMail} = require('../controllers/mailController')

emailRouter.get('/',getAllEmails)
emailRouter.get('/:id',getEmailById)
emailRouter.post('/',addNewMail)




module.exports = emailRouter;