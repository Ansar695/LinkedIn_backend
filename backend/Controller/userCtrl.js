const userModel = require("../model/userModel")
const bcrypt = require("bcryptjs")

const userRegistration = async(req, res) => {
    console.log(req.body)
    try {
        const userExist = await userModel.findOne({email: req.body.email})
        if(userExist){
            res.status(404).json({message: "Duplication Error"})
        }
        const result = new userModel(req.body)
        const data = await result.save()
        res.status(200).send(data)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    userRegistration
}