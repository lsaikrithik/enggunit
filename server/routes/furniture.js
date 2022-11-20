import express from 'express';

import { createFurniture, getFurniture, getFurnitures, updateFurniture,  deleteFurniture } from '../controllers/furniture.js';
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/furniture", verifyAdmin, createFurniture);

//UPDATE
router.put("/:id", verifyAdmin, updateFurniture);

//DELETE
router.delete("/:id", verifyAdmin, deleteFurniture);

//GET
router.get("/:id", verifyAdmin, getFurniture);

//GET ALL
router.get("/", verifyAdmin, getFurnitures);

export default router;