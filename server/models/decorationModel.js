import { Schema, model } from "mongoose";

const decorationSchema = new Schema({
  decorationName: { type: String, required: true },
  price: { type: Number, required: true },
});

const Decoration = model("Decoration", decorationSchema);

export default Decoration;
