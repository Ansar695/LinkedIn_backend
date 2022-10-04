require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE, {

}).then(() => {
    console.log("Connection Successful")
}).catch((err) => {
    console.log("Connection Error")
})
