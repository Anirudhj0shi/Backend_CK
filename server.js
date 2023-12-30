// import mongoose from "mongoose";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import  {Contact}  from "./Models/Contact.js";
import contactRouter from './routes/contact.js';
import cors from "cors";
import { config } from "dotenv";



const app = express();

config({
    path:'.env'
})
app.use(bodyParser.json());
app.use(
    cors({
        origin: process.env.Frontend_URl,
        method:["GET","POST","PUT","DELETE"],
        credential:true
    })
)
 
mongoose.connect(process.env.Mongo_URL,{
    dbName:"MERN_Project_Contact_Keeper"
}).then(()=>console.log("MongoDB Connected....!"));

//COntact Router
app.use('/api',contactRouter);




const port = 8000
app.listen(port, ()=>{
    console.log(`Server is running live on  ${port}`)
})
