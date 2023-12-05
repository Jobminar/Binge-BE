
import Theater from '../models/theatermodel.js';


const theaterController = {

  addTheater: async (req, res) => {
    try {
      
      const { currentPrice, currentPeople } = req.body;

    
      if (!currentPrice || !currentPeople) {
        return res.status(400).json({ error: 'Both currentPrice and currentPeople are required' });
      }

   
      const newTheater = new Theater({ currentPrice, currentPeople });

      
      const savedTheater = await newTheater.save();

      
      res.status(201).json(savedTheater);
    } catch (error) {
     
      console.error('Error adding theater:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getTheaters: async (req, res) => {
    try {
   
      const theaters = await Theater.find();
      res.status(200).json(theaters);
    } catch (error) {
     
      console.error('Error fetching theaters:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  
  deleteTheater: async (req, res) => {
    try {
     
      const theaterId = req.params.id;

      
      const result = await Theater.deleteOne({ _id: theaterId });

      
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Theater not found' });
      }

     
      res.status(204).send();
    } catch (error) {
     
      console.error('Error deleting theater:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};


export default theaterController;
