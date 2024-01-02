const app = require('./app');
// const cloudinary = require('cloudinary')

const dotenv = require('dotenv')
const connectDatabase= require('./config/database')

//config
dotenv.config({path:".env"})


//Connect to database
connectDatabase()

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret:process.env.CLOUDINARY_API_SECRET
// })


app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})