const express = require("express");

const stats = require("./stats");
const client = require("./client");
const object = require("./object");
const user = require("./user");
const auth = require("./auth");

const router = express.Router();

router.use("/client", client);
router.use("/stats", stats);
router.use("/user", user);
router.use("/object", object);
router.use("/auth", auth);

module.exports = router;
