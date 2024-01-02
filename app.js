const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error')
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
const dotenv = require('dotenv')
dotenv.config({path:"backend/config/config.env"})

//Route imports
const user = require("./routes/userRoute")

app.use("/api/v1",user);


//middleware for error
app.use(errorMiddleware)


module.exports = app