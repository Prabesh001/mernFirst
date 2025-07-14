import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },

  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    expires: 60,
  },
});

export default mongoose.model("Otp", OtpSchema);
