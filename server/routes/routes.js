import express from "express";
const router = express.Router();
import userController from "../controllers/userController.js";
import slotController from "../controllers/slotController.js";
import cakeController from "../controllers/cakeController.js";
import decorationController from "../controllers/decorationController.js";
import orderController from "../controllers/orderController.js";
import contactUsController from "../controllers/contactusController.js";

// Create a new user
router.post("/users", userController.createUser);

// Get all slots
router.get("/slots", slotController.getSlots);

// Create a new slot
router.post("/slots", slotController.createSlot);

// Get all cakes
router.get("/cakes", cakeController.getCakes);

// Create a new cake
router.post("/cakes", cakeController.createCake);

// Get all decorations
router.get("/decorations", decorationController.getDecorations);

// Create a new decoration
router.post("/decorations", decorationController.createDecoration);

// Get all orders
router.get("/orders", orderController.getOrders);

// Create a new order
router.post("/orders", orderController.createOrder);

// Get all contact us entries
router.get("/contactus", contactUsController.getContactUs);

// Create a new contact us entry
router.post("/contactus", contactUsController.createContactUs);

export default router;
