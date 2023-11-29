import Order from "../models/orderModel.js";

const orderController = {
  getOrders: async (req, res) => {
    try {
      // Logic to retrieve all orders from the database
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createOrder: async (req, res) => {
    try {
      const order = new Order(req.body);
      await order.save();
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // other controller methods...
};

export default orderController;
