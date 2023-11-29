import Decoration from "../models/decorationModel.js";

const decorationController = {
  getDecorations: async (req, res) => {
    try {
      // Logic to retrieve all decorations from the database
      const decorations = await Decoration.find();
      res.status(200).json(decorations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createDecoration: async (req, res) => {
    try {
      const decoration = new Decoration(req.body);
      await decoration.save();
      res.status(201).json(decoration);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // other controller methods...
};

export default decorationController;
