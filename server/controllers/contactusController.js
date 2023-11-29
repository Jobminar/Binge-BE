import ContactUs from "../models/contactusModel.js";

const contactUsController = {
  // Get all contact us entries
  getContactUs: async (req, res) => {
    try {
      // Logic to retrieve all contact us entries from the database
      const contactUsEntries = await ContactUs.find();
      res.status(200).json(contactUsEntries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new contact us entry
  createContactUs: async (req, res) => {
    try {
      // Extract contact us data from the request body
      const { name, mailID, phone, message } = req.body;

      // Validate request data (add more validation if needed)

      // Create a new ContactUs instance
      const contactUs = new ContactUs({ name, mailID, phone, message });

      // Save the contact us entry to the database
      await contactUs.save();

      // Respond with the created contact us entry
      res.status(201).json(contactUs);
    } catch (error) {
      // Handle validation errors or other issues
      res.status(400).json({ error: error.message });
    }
  },

  // Update a contact us entry by ID
  updateContactUs: async (req, res) => {
    try {
      const { id } = req.params;

      // Logic to update the contact us entry in the database
      const updatedContactUs = await ContactUs.findByIdAndUpdate(
        id,
        req.body,
        { new: true } // Return the updated document
      );

      if (!updatedContactUs) {
        return res.status(404).json({ error: "ContactUs not found" });
      }

      res.status(200).json(updatedContactUs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a contact us entry by ID
  deleteContactUs: async (req, res) => {
    try {
      const { id } = req.params;

      // Logic to delete the contact us entry from the database
      const deletedContactUs = await ContactUs.findByIdAndDelete(id);

      if (!deletedContactUs) {
        return res.status(404).json({ error: "ContactUs not found" });
      }

      res.status(200).json(deletedContactUs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // other controller methods...
};

export default contactUsController;
