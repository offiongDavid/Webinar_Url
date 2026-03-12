const Registration = require("../models/Registration")

// Create a new registration
const registerUser = async (req, res) => {

try {

const {
email,
name,
level,
expectations,
questions
} = req.body

// create new document
const newRegistration = new Registration({
email,
name,
level,
expectations,
questions
})

await newRegistration.save()

res.status(201).json({
message: "Registration successful",
data: newRegistration
})

}

catch(error){

console.error(error)

res.status(500).json({
message: "Server error"
})

}

}

module.exports = {
registerUser
}