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

  deleteOrder: async (req, res) => {
    try {
      const orderId = req.params.id;

      // Use deleteOne method to delete the order
      const result = await Order.deleteOne({ _id: orderId });

      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Order not found' });
      }

      res.status(204).send(); // 204 No Content for a successful deletion
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // other controller methods...
};

export default orderController;
