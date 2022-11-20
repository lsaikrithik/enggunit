import express from 'express';

import { createMaintenance, getMaintenance } from '../controllers/maintenance.js';
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", verifyAdmin, createMaintenance);


//GET
router.get("/:id", verifyAdmin, getMaintenance);



export default router;