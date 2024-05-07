import express from "express";
import {
    createYoga,
    getYogaPose,
    getYogaPoses
} from "../controllers/yogapose.js";


const router = express.Router();

router.post("/addYogaPose",createYoga)
router.get("/getYogaPose/:id",getYogaPose)
router.get("/getYogaPoses",getYogaPoses)



export default router;