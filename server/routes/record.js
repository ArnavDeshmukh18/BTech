import express from "express";
import { postRecord,rankListByPose} from "../controllers/record.js";

const router = express.Router();
router.post("/postrecord",postRecord)
router.post("/getRecord",rankListByPose)

export default router