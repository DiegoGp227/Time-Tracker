import { Router } from "express";
import { getActivityId, getActivity, createActivity, updateActivity, deleteActivity } from "../controllers/activitys.controllers.js";
import { Router } from "express";
import { getActivityId, getActivity, createActivity, updateActivity, deleteActivity } from "../controllers/activitys.controllers.js";


const router = Router()

router.get("/activity", getActivity);

router.get("/activity/:id", getActivityId)

router.post("/activity", createActivity)

router.put("/activity/:id", updateActivity) ///router.patch

router.delete("/activity/:id", deleteActivity)
router.delete("/activity/:id", deleteActivity)

export default router

