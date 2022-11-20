
import express from 'express';
import mongoose from 'mongoose';
import Complaint from "../models/Complaint.js";

const router = express.Router();

export const registerComplaint = async (req, res, next) => {
    const newComplaint = new Complaint(req.body);
  
    try {
      const savedComplaint = await newComplaint.save();
      res.status(200).json(savedComplaint);
    } catch (err) {
      next(err);
    }
  };

  export const createComplaint = async (req, res) => {
    const { username, email, dept, raisecomplaint, selectedFile } = req.body;

    const newComplaint = new Complaint({ username, email, dept, raisecomplaint, selectedFile })

    try {
        await newComplaint.save();

        res.status(201).json(newComplaint );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


  export const updateComplaint = async (req, res, next) => {
    try {
      const updatedComplaint = await Complaint.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedComplaint);
    } catch (err) {
      next(err);
    }
  };
  export const deleteComplaint = async (req, res, next) => {
    try {
      await Complaint.findByIdAndDelete(req.params.id);
      res.status(200).json("Complaint has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  export const getComplaint = async (req, res, next) => {
    try {
      const complaint = await Complaint.findById(req.params.id);
      res.status(200).json(complaint);
    } catch (err) {
      next(err);
    }
  };
  export const getComplaints = async (req, res, next) => {
    try {
      const complaints = await Complaint.find();
      res.status(200).json(complaints);
    } catch (err) {
      next(err);
    }
  };
  



export default router;