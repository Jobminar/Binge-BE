import Slot from "../models/slotModel.js";

const slotController = {
  getSlots: async (req, res) => {
    try {
      // Logic to retrieve all slots from the database
      const slots = await Slot.find();
      res.status(200).json(slots);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createSlot: async (req, res) => {
    try {
      const slot = new Slot(req.body);
      await slot.save();
      res.status(201).json(slot);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // other controller methods...
};

export default slotController;
