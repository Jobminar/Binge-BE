import ContactUs from "../models/contactusModel";

export async function createContactUs(req, res) {
  try {
    const contactUs = new ContactUs(req.body);
    await contactUs.save();
    res.status(201).json(contactUs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
