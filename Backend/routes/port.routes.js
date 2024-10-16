import { Router } from "express";
import { getPassesId, getPasses, createPasses, updatePasses, deletePasses } from "../controllers/passes.controller.js";


const router = Router()

router.get("/passes/:id", getPassesId )

router.get("/passes", getPasses);

router.post("/passes", createPasses)

router.put("/passes/:id", updatePasses) ///router.patch

router.delete("/passes/:id", deletePasses)

export default router