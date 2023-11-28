import Decoration from "../models/decorationModel";

export async function createDecoration(req, res) {
  try {
    const decoration = new Decoration(req.body);
    await decoration.save();
    res.status(201).json(decoration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
