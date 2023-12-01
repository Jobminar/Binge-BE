import Cake from "../models/cakeModel.js";

const cakeController = {
  getCakes: async (req, res) => {
    try {
      const cakes = await Cake.find();
      res.status(200).json(cakes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCake: async (req, res) => {
    try {
      const { cakeName, price, image } = req.body;
      const cake = new Cake({ cakeName, price, image });
      await cake.save();

      res.status(201).json(cake);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteCake: async (req, res) => {
    try {
      const { cakeId } = req.params;

      // Check if the cake with the given ID exists
      const cake = await Cake.findById(cakeId);

      if (!cake) {
        return res.status(404).json({ error: "Cake not found" });
      }

      // Delete the cake
      await Cake.deleteOne({ _id: cakeId });

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default cakeController;


