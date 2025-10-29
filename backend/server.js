import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/FoodRoute.js';



//app config
const app= express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))


app.get("/",(req,res)=>{
    res.send("Api is working")
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})

// mongodb+srv://artist78887:Artist78887@cluster0.zbyvwca.mongodb.net/?appName=Cluster0