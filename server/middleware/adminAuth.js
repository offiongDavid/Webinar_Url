require("dotenv").config()

const adminAuth = (req,res,next)=>{

const password = req.headers.password

if(password === process.env.ADMIN_PASSWORD){

next()

}

else{

res.status(401).json({
message:"Unauthorized"
})

}

}

module.exports = adminAuth