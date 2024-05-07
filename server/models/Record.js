import mongoose from "mongoose";
const RecordSchema=new mongoose.Schema(
    {
       userId:{
        type:String,
        required: true
       },
       poseId:{
        type:String,
        required:true
       },
       bestTime:{
        type:Number,
        required:true
       }
            
    }
)
export default mongoose.model("record", RecordSchema);