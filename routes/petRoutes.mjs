import { Router } from "express";
import { getPetTypes, getPetsForType, getPet } from "../controllers/petUtils.mjs";

const router = Router();

router.route("/pets").get(getPetTypes);

router.route("/pets/:type").get(getPetsForType);

router.route("/pets/:type/:id").get(getPet);

export default router;
