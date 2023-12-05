import { Schema, model } from 'mongoose';

const theaterSchema = new Schema({
    currentPrice: { type: Number, required: true },
    currentPeople: { type: Number, required: true }
});

const Theater = model('Theater', theaterSchema);

export default Theater;