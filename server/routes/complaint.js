import express from 'express';

import { registerComplaint, getComplaint, getComplaints, updateComplaint,  deleteComplaint } from '../controllers/complaint.js';
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/complaints", verifyUser, registerComplaint);

//UPDATE
router.put("/:id", verifyUser, updateComplaint);

//DELETE
router.delete("/:id", verifyAdmin, deleteComplaint);

//GET
router.get("/:id", verifyAdmin, getComplaint);

//GET ALL
router.get("/", verifyAdmin, getComplaints);

export default router;