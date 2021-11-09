const contactUsModel = require('../models/contactUsModel')



const getAllContacts = async (req,res) =>{
    try{
        const Contacts = await contactUsModel.find({});

        res.json(({status:'success!',Contacts:Contacts}));
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getContactById = async (req,res) =>{
    try{
        const singleContact = await contactUsModel.findById(req.params.id);

        res.json({status:'success!',contact:singleContact});
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const addNewContact = async (req,res) =>{
    const {text,subject,email} = req.body
    try{
        const addedContact = await contactUsModel.create({email:email,subject:subject,text:text});

        res.json({status:'email added!',addedContact:addedContact});
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

module.exports = {
    getAllContacts,
    getContactById,
    addNewContact


}