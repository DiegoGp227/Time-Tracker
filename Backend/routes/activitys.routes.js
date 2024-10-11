import {Router} from "express";
import {getActivity} from "../controllers/activitys.controllers.js";
import {createActivity} from "../controllers/activitys.controllers.js";
import {updateActivity} from "../controllers/activitys.controllers.js";
import {deleteActivity} from "../controllers/activitys.controllers.js";


const router = Router()

router.get("/activity", getActivity)

router.post("/activity", createActivity)

router.put("/activity", updateActivity)

router.delete("/activity", deleteActivity)

export default router

