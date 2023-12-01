// userController.js

import User from "../models/userModel.js";

const userController = {
  createUser: async (req, res) => {
    try {
      const { sNo, name, whatsappNumber, email, numberOfPeople, eventType, date } = req.body;
      const user = new User({ sNo, name, whatsappNumber, email, numberOfPeople, eventType, date });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      console.log("Fetching users...");
      const users = await User.find();
      console.log("Users:", users);
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: error.message });
    }
  },
};

export default userController;
