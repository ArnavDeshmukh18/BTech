import Record from "../models/Record.js";

export const postRecord = async (req, res, next) => {
    try {

        
      const newRecord=new Record(req.body)
      await newRecord.save()

     res.status(200).send("Record Added!!") 
    } catch (err) {
      next(err);
    }
  };


  export const rankListByPose=async(req,res,next)=>{
    try{
        
        const poseId=req.body.poseId;
         const result=await Record.find({poseId}).sort({bestTime:-1})

         res.status(200).json(result)


    }
    catch(err)
    {
        next(err)
    }
  }