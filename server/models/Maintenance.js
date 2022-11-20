import mongoose from "mongoose";
const MaintenanceSchema = mongoose.Schema({
    
        dept: {
          type: String,
          required: true,
          unique: true,
        },
        task: {
          type: String,
          required: true,
          unique: true,
        },
        mode: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          required: true,
        },
        reportfile: {
          type: String,
          default: false,
        },
        isAdmin: {
            type: Boolean,
            default: true,
          },
        },
      
      { timestamps: true }
    );

export default mongoose.model("Maintenance", MaintenanceSchema)