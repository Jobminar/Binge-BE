// controllers/dateTimeController.js
import DateTime from '../models/dateTimeModel.js';

const dateTimeController = {
  addBatchData: async (req, res) => {
    try {
      const { slots } = req.body;
      const insertedSlots = await DateTime.insertMany(slots);

      res.status(201).json({ message: 'Batch data added successfully', insertedSlots });
    } catch (error) {
      console.error('Error adding batch data:', error.message);
      res.status(500).json({ error: error.message });
    }
  },

  getAllBatch: async (req, res) => {
    try {
      const allBatch = await DateTime.find();
      res.status(200).json(allBatch);
    } catch (error) {
      console.error('Error fetching batch data:', error.message);
      res.status(500).json({ error: error.message });
    }
  },
};

export default dateTimeController;
