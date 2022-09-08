const express = require("express");

const clientController = require("../controllers/client");
const router = express.Router();
const adminAuth = require("../middleware/adminAuth");

router.post(
    "/create",
    clientController.create
);
router.get(
    "/getAll",
    clientController.getAll
);
router.post(
    "/login",
    clientController.login
);

router.delete(
    "/delete",adminAuth,
    clientController.delete
);


module.exports = router;
