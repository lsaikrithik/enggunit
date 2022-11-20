import mongoose from "mongoose";
const FurnitureSchema = mongoose.Schema({
    
        furniture: {
          type: String,
          required: true,
          unique: true,
        },
        quantity: {
          type: Number,
          required: true,
          unique: true,
        },
        price: {
          type: Number,
          required: true,
        },
        purpose: {
          type: String,
          required: true,
        },
        billfile: {
          type: String,
          default: false,
        },
        invoiceraised: {
            type: Boolean,
            default: true,
          },
          isAdmin: {
            type: Boolean,
            default: true,
          },
      },
      { timestamps: true }
    );

export default mongoose.model("Furniture", FurnitureSchema)