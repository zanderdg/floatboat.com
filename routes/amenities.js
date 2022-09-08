const express = require("express");

const amenitiesController = require("../controllers/amenities");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const {uploadImages} = require("../middleware/uploadImage");

router.post(
    "/create",[adminAuth,uploadImages],
    amenitiesController.create
);

router.get(
    "/getAll",adminAuth,
    amenitiesController.getAll
);

router.delete(
    "/delete",adminAuth,
    amenitiesController.delete
);



module.exports = router;
