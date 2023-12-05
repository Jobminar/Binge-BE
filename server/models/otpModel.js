import { Schema, model } from 'mongoose';

const otpSchema = new Schema({
  mobileNumber: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 600 }, // OTP expires in 10 minutes
});

const Otp = model('Otp', otpSchema);

export default Otp;
