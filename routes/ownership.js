const express = require("express");

const ownershipController = require("../controllers/ownership");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");
const {uploadImages} = require("../middleware/uploadImage");

router.post(
    "/create",[adminAuth,uploadImages],
    ownershipController.create
);

router.get(
    "/getAll",adminAuth,
    ownershipController.getAll
);

router.delete(
    "/delete",adminAuth,
    ownershipController.delete
);



module.exports = router;
