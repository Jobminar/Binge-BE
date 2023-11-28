import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  paymentID: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  dateTime: { type: Date, default: Date.now },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  numberOfPeople: { type: Number, required: true },
  qrCode: { type: String, required: true },
});

const Order = model("Order", orderSchema);

export default Order;
