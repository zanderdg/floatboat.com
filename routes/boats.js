const express = require("express");

const boatController = require("../controllers/boat");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const { uploadImages } = require("../middleware/uploadImage");

router.post(
  "/create",
  uploadImages,
  // "/create",[adminAuth,uploadImages],
  boatController.create
);

router.get("/getAll", boatController.logs);
router.get("/get/:id", boatController.getById);
router.get("/get-destinations", boatController.getAllDestinations);
router.get("/getPrice", boatController.getPriceRange);

router.delete("/delete", adminAuth, boatController.delete);

module.exports = router;
