const Registration = require("../models/Registration")

exports.getAllRegistrations = async (req,res)=>{

try{

const users = await Registration.find()

res.json(users)

}

catch(error){

res.status(500).json(error)

}

}

exports.deleteRegistration = async(req,res)=>{

try{

await Registration.findByIdAndDelete(req.params.id)

res.json({message:"Deleted successfully"})

}

catch(error){

res.status(500).json(error)

}

}