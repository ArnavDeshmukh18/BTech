import mongoose from "mongoose";
const YogaSchema=new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
          },
          img: {
            type: String,
            required: true,
            unique: true,
          },
          info:{
            type:String,
            required: true,
            unique: true,
          },
         
        
    }
)

export default mongoose.model("YogaPose", YogaSchema);