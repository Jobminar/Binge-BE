import Decoration from "../models/decorationModel.js";

const decorationController = {
  getDecorations: async (req, res) => {
    try {
      const decorations = await Decoration.find();
      res.status(200).json(decorations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createDecoration: async (req, res) => {
    try {
      const { decorationName, price, image } = req.body;

      const decoration = new Decoration({ decorationName, price, image });
      await decoration.save();

      res.status(201).json(decoration);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteDecoration: async (req, res) => {
    try {
      const decorationId = req.params.id;

      // Use deleteOne method to delete the decoration
      const result = await Decoration.deleteOne({ _id: decorationId });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Decoration not found' });
      }

      res.status(204).send(); // 204 No Content for a successful deletion
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default decorationController;
