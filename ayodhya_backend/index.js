import dotenv from 'dotenv'
import Razorpay from 'razorpay';

import connectDB from './src/DB/index.js';
import app from './server.js';


dotenv.config({
    path: './.env' //where is our env file
})

connectDB() //since it reutrn a promise(async way?) 
.then(()=>{
    //since mongodb is connnected but app not listening
    app.listen(process.env.PORT|| 3001,()=>{
        console.log(` Port listening on ${process.env.PORT}`)
    } )
})
.catch((error)=>{
    console.log("Mongo DB Connection failed : ",error)
})


export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
})