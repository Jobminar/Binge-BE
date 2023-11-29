import Cake from "../models/cakeModel.js";

const cakeController = {
  getCakes: async (req, res) => {
    try {
      // Logic to retrieve all cakes from the database
      const cakes = await Cake.find();
      res.status(200).json(cakes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCake: async (req, res) => {
    try {
      const cake = new Cake(req.body);
      await cake.save();
      res.status(201).json(cake);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // other controller methods...
};

export default cakeController;
