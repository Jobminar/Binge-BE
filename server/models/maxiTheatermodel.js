import { Schema, model } from 'mongoose';

const theaterSchema = new Schema({
  price: { type: Number, required: true },
  numberOfPeople: { type: Number, required: true }
});

const Theater = model('Theater', theaterSchema);

export default Theater;
