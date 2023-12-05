import express from "express";
import multer from "multer";
import userController from "../controllers/userController.js";
import blogsController from "../controllers/blogsController.js";
import slotController from "../controllers/slotController.js";
import cakeController from "../controllers/cakeController.js";
import decorationController from "../controllers/decorationController.js";
import orderController from "../controllers/orderController.js";
import contactUsController from "../controllers/contactusController.js";
import loginController from "../controllers/loginController.js";
import theaterController from "../controllers/theatreController.js";
import reportsController from "../controllers/reportsController.js";



const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();



router.post("/signup", loginController.signup);
router.post("/login", loginController.login);

router.post("/postreports",reportsController.createReports)
router.get("/getreports",reportsController.getReports)



router.post("/users", userController.createUser);
router.get("/getusers", userController.getUsers);

router.get("/getslots", slotController.getSlots);
router.post("/postslots", slotController.createSlot);

router.delete("/slots/:id", slotController.deleteSlot);

router.get("/getcakes", cakeController.getCakes);

router.post("/postcakes", cakeController.createCake);

router.delete("/cakes/:cakeId", cakeController.deleteCake);

router.get("/getdecorations", decorationController.getDecorations);

router.post('/postdecorations', upload.single('image'), decorationController.createDecoration);

router.delete("/decorations/:id", decorationController.deleteDecoration);

router.get("/getorders", orderController.getOrders);

router.post("/postorders", orderController.createOrder);

router.delete("/deleteorders/:id", orderController.deleteOrder);

router.get("/getcontactus", contactUsController.getContactUs);

router.post("/postcontactus", contactUsController.createContactUs);
router.delete('/deletecontactus/:id', contactUsController.deleteContactUs);

router.post("/postblogs", blogsController.createBlog);

router.get("/getblogs", blogsController.getBlogs);

router.delete('/deleteblog/:id', blogsController.deleteBlog);

router.post("/posttheater", theaterController.addTheater); 
router.get("/gettheater",theaterController.getTheaters)
router.delete("/theater/:id",theaterController.deleteTheater)

export default router;
