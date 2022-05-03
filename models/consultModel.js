import mongoose from "mongoose";

const consultSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    email: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);


module.exports = mongoose.models.Consult || mongoose.model("Consult", consultSchema);