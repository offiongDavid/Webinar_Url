const mongoose = require("mongoose")

const RegistrationSchema = new mongoose.Schema({

email: { type: String, required: true },

name: { type: String, required: true },

level: { type: String, required: true },

expectations: { type: String, required: true },

questions: { type: String, required: true }

})

module.exports = mongoose.model("Registration", RegistrationSchema)