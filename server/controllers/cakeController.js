import Cake from "../models/cakeModel";

export async function createCake(req, res) {
  try {
    const cake = new Cake(req.body);
    await cake.save();
    res.status(201).json(cake);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
