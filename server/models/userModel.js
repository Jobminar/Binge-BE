
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  sNo: { type: Number, required: true },
  name: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  email: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  eventType: { type: String, required: true },
  date: { type: Date, required: true },
});

const User = model("User", userSchema);

export default User;
