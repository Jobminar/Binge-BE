import ContactUs from "../models/contactusModel.js";

const contactUsController = {
  getContactUs: async (req, res) => {
    try {
      // Logic to retrieve contact us entries from the database
      const contactUsEntries = await ContactUs.find();

      res.status(200).json(contactUsEntries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createContactUs: async (req, res) => {
    try {
      const { name, mailID, phone, message } = req.body;

      // Validate request data (you can add more validation logic as needed)

      // Create a new ContactUs entry
      const newContactUs = new ContactUs({ name, mailID, phone, message });
      await newContactUs.save();

      res.status(201).json(newContactUs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // other controller methods...
};

export default contactUsController;
