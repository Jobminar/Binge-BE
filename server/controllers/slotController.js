import Slot from "../models/slotModel";

export async function createSlot(req, res) {
  try {
    const slot = new Slot(req.body);
    await slot.save();
    res.status(201).json(slot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
