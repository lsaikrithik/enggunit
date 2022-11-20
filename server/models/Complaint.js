import mongoose from "mongoose";


const ComplaintSchema = mongoose.Schema({
    
        username: {
          type: String,
          required: true,
          unique: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        dept: {
          type: String,
          required: true,
        },
        raisecomplaint: {
          type: String,
          required: true,
        },
        selectedFile: {
          type: Boolean,
          default: false,
        },
      },
      { timestamps: true }
    );

export default mongoose.model("Complaint", ComplaintSchema)