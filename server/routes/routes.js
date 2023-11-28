import express from "express";
const router = express.Router();
import userController from "../controllers/userController";
import slotController from "../controllers/slotController";
import cakeController from "../controllers/cakeController";
import decorationController from "../controllers/decorationController";
import orderController from "../controllers/orderController";
import contactUsController from "../controllers/contactusController";

// User Routes
router.route("/users").post(userController.createUser);

// Slot Routes
router
  .route("/slots")
  .get(slotController.getSlots)
  .post(slotController.createSlot);

// Cake Routes
router
  .route("/cakes")
  .get(cakeController.getCakes)
  .post(cakeController.createCake);

// Decoration Routes
router
  .route("/decorations")
  .get(decorationController.getDecorations)
  .post(decorationController.createDecoration);

// Order Routes
router
  .route("/orders")
  .get(orderController.getOrders)
  .post(orderController.createOrder);

// Contact Us Routes
router
  .route("/contactus")
  .get(contactUsController.getContactUs)
  .post(contactUsController.createContactUs);

export default router;
