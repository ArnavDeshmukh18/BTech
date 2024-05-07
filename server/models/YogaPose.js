import mongoose from "mongoose";
const YogaSchema=new mongoose.Schema(
    { 
          id:{
               type:String,
               required:true,
               unique:true
          } ,     
        name: {
            type: String,
            required: true,
            unique: true,
          }
        
    }
)

export default mongoose.model("YogaPose", YogaSchema);