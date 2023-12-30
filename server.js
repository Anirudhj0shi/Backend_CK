// import mongoose from "mongoose";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import  {Contact}  from "./Models/Contact.js";
import contactRouter from './routes/contact.js'


const app = express();
app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:5173/",
        method:["GET","POST","PUT","DELETE"],
        credential:true
    })
)
 
mongoose.connect("mongodb+srv://Anirudh44:VhEMGjmh9J5DJILa@anirudh44.duikqvt.mongodb.net/",{
    dbName:"MERN_Project_Contact_Keeper"
}).then(()=>console.log("MongoDB Connected....!"));

//COntact Router
app.use('/api',contactRouter);




const port = 8000
app.listen(port, ()=>{
    console.log(`Server is running live on  ${port}`)
})
