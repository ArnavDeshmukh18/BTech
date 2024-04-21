import mongoose from "mongoose";
const RecordSchema=new mongoose.Schema(
    {
       userId:{
        type:String,
        required: true,
        unique: true,
       },
       poseId:{
        type:String,
        required:true,
        unique:true
       }
  
         
        
    }
)