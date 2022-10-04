const express = require("express")
const { userRegistration } = require("../Controller/userCtrl")
const router = express.Router()

// USER REGISTRATION ROUTER
router.post("/register", userRegistration)
// router.post("/signin", userSignin)

module.exports = router