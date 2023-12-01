import { Schema, model } from "mongoose";

const cakeSchema = new Schema({
  cakeName: { type: String, required: true },
  price: { type: Number, required: true },
  image:{type:Buffer,required:true}
});

const Cake = model("Cake", cakeSchema);

export default Cake;
