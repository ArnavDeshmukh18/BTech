import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import recordRoute from "./routes/record.js"
import yogaRoute from './routes/yogapose.js'
import userRoute from './routes/user.js'
import cookieParser from "cookie-parser";
import cors from "cors";
const app=express();




const connect = async () => {
    try {
      await mongoose.connect('mongodb+srv://arnavd2840:pNzAjatSMq70tqLY@cluster0.fvubxzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  }); 


  app.use(cors())
  app.use(cookieParser())
  app.use(express.json());
  
  app.use("/api/auth", authRoute);
  app.use("/api/record",recordRoute);
  app.use("/api/yogapose",yogaRoute);
  app.use("/api/user",userRoute)
  
  
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  
  

app.listen(8800,()=>{
    connect()
    console.log("Connected to Backend")
})