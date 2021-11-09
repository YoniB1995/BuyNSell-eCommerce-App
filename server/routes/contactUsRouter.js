const express= require('express');
const contactUsRouter = express.Router();
const {getAllContacts,getContactById, addNewContact} = require('../controllers/contactController')

contactUsRouter.get('/',getAllContacts)
contactUsRouter.get('/:id',getContactById)
contactUsRouter.post('/',addNewContact)




module.exports = contactUsRouter;