// Import necessary modules
import Theater from '../models/theaterModel.js';

// Define controller functions
const theaterController = {
  // Add a new theater
  addTheater: async (req, res) => {
    try {
      // Extract data from request body
      const { currentPrice, currentPeople } = req.body;

      // Validate data
      if (!currentPrice || !currentPeople) {
        return res.status(400).json({ error: 'Both currentPrice and currentPeople are required' });
      }

      // Create a new theater instance
      const newTheater = new Theater({ currentPrice, currentPeople });

      // Save the new theater to the database
      const savedTheater = await newTheater.save();

      // Respond with the saved theater data
      res.status(201).json(savedTheater);
    } catch (error) {
      // Handle errors
      console.error('Error adding theater:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Fetch all theaters
  getTheaters: async (req, res) => {
    try {
      // Fetch all theaters from the database
      const theaters = await Theater.find();
      res.status(200).json(theaters);
    } catch (error) {
      // Handle errors
      console.error('Error fetching theaters:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Delete a theater
  deleteTheater: async (req, res) => {
    try {
      // Extract theater ID from request parameters
      const theaterId = req.params.id;

      // Delete the theater from the database
      const result = await Theater.deleteOne({ _id: theaterId });

      // Check if the theater was found and deleted
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Theater not found' });
      }

      // Respond with a success message
      res.status(204).send();
    } catch (error) {
      // Handle errors
      console.error('Error deleting theater:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

// Export the theaterController
export default theaterController;
