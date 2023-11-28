import { Schema, model } from "mongoose";

const contactUsSchema = new Schema({
  name: { type: String, required: true },
  mailID: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

const ContactUs = model("ContactUs", contactUsSchema);

export default ContactUs;
