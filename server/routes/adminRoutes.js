const express = require("express")
const router = express.Router()

const {
getAllRegistrations,
deleteRegistration
} = require("../controllers/adminController")

const adminAuth = require("../middleware/adminAuth")

router.get(
"/registrations",
adminAuth,
getAllRegistrations
)

router.delete(
"/registrations/:id",
adminAuth,
deleteRegistration
)

module.exports = router