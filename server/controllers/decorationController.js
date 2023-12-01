// decorationController.js

import Decoration from "../models/decorationModel.js";
import multer from "multer";

// Multer configuration for handling file uploads
const storage = multer.memoryStorage(); // Store files in memory as Buffer
const upload = multer({ storage: storage });

const decorationController = {
  getDecorations: async (req, res) => {
    try {
      const decorations = await Decoration.find();
      res.status(200).json(decorations);
    } catch (error) {
      console.error('Error fetching decorations:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createDecoration: async (req, res) => {
    try {
      const { decorationName, price } = req.body;

      // Check if the request contains a file
      if (!req.file) {
        return res.status(400).json({ error: 'Image file is required' });
      }

      // Convert the image buffer to base64
      const image = req.file.buffer.toString('base64');

      // Validate decorationName and price
      if (!decorationName || !price) {
        return res.status(400).json({ error: 'Decoration name and price are required' });
      }

      // Create a new Decoration instance
      const decoration = new Decoration({ decorationName, price, image });

      // Save the decoration to the database
      const savedDecoration = await decoration.save();

      res.status(201).json(savedDecoration);
    } catch (error) {
      console.error('Error creating decoration:', error);
      res.status(500).json({ error: 'Internal Server Error' });
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
      console.error('Error deleting decoration:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default decorationController;
