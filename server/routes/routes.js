import express from "express";
const router = express.Router();

import userController from "../controllers/userController.js";
import blogsController from "../controllers/blogsController.js";
import slotController from "../controllers/slotController.js";
import cakeController from "../controllers/cakeController.js";
import decorationController from "../controllers/decorationController.js";
import orderController from "../controllers/orderController.js";
import contactUsController from "../controllers/contactusController.js";
import loginController from "../controllers/loginController.js";


router.post("/signup", loginController.signup);
router.post("/login", loginController.login);

router.post("/users", userController.createUser);
router.get("/getusers",userController.getUsers)


router.get("/getslots", slotController.getSlots);
router.post("/postslots", slotController.createSlot);

router.delete("/slots/:id",slotController.deleteSlot)

router.get("/getcakes", cakeController.getCakes);


router.post("/postcakes", cakeController.createCake);

router.delete("/cakes/:cakeId", cakeController.deleteCake);

router.get("/getdecorations", decorationController.getDecorations);


router.post("/postdecorations", decorationController.createDecoration);

router.delete("/decorations/:id",decorationController.deleteDecoration)


router.get("/getorders", orderController.getOrders);

router.post("/postorders", orderController.createOrder);

router.delete("/deleteorders/:id",orderController.deleteOrder)


router.get("/getcontactus", contactUsController.getContactUs);


router.post("/postcontactus", contactUsController.createContactUs);
router.delete('/deletecontactus/:id', contactUsController.deleteContactUs);


router.post("/postblogs",blogsController.createBlog)

router.get("/getblogs",blogsController.getBlogs)


router.delete('/deleteblog/:id', blogsController.deleteBlog);


export default router;
