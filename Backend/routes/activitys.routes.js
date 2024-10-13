import { Router } from "express";
import { getActivityId, getActivity, createActivity, updateActivity, deleteActivity } from "../controllers/activitys.controllers.js";


const router = Router()

router.get("/activity/:id", getActivityId)

router.get("/activity", getActivity);

router.post("/activity", createActivity)

router.put("/activity/:id", updateActivity)

router.delete("/activity/:id", deleteActivity)

export default router

