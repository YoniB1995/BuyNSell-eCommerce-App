const mail = require('../models/mailModel')



const getAllEmails = async (req,res) =>{
    try{
        const Emails = await mail.find({});

        res.json(({status:'success!',Emails:Emails}));
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getEmailById = async (req,res) =>{
    try{
        const singleMail = await mail.findById(req.params.id);

        res.json({status:'success!',email:singleMail});
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const addNewMail = async (req,res) =>{
    const {email} = req.body
    try{
        const addedMail = await mail.create({email:email});

        res.json({status:'email added!',email:addedMail});
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

module.exports = {
    getAllEmails,
    getEmailById,
    addNewMail


}