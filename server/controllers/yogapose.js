import YogaPose from "../models/YogaPose";


export const createYoga = async (req, res, next) => {
  const newYogaPose = new YogaPose(req.body);

  try {
    const savedYogaPose = await newYogaPose.save();
    res.status(200).json(savedYogaPose);
  } catch (err) {
    next(err);
  }
};


export const getYogaPose = async (req, res, next) => {
  try {
    const yogapose = await YogaPose.findById(req.params.id);
    res.status(200).json(yogapose);
  } catch (err) {
    next(err);
  }
};
export const getYogaPoses = async (req, res, next) => {
  
  try {
    const yogaposes = await YogaPose.find({})
    res.status(200).json(yogaposes);
  } catch (err) {
    next(err);
  }
};
