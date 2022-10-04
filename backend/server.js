require("dotenv").config();
const cookieParser = require("cookie-parser")
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT

require("./DB/db")

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())
app.use(express.json())

app.use("/", require("./Routes/router"))

app.listen(port, () => console.log(`Server started at port no ${port}`))