import DateTime from "../models/dateTimeModel.js";

const dateTimeController = {
  createDateTime: async (req, res) => {
    try {
      const dateTime = new DateTime(req.body);
      await dateTime.save();
      res.status(201).json(dateTime);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getDateTimeList: async (req, res) => {
    try {
      const dateTimeList = await DateTime.find();
      res.status(200).json(dateTimeList);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default dateTimeController;
