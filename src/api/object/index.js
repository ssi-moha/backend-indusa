const express = require("express");

const wrapper = require("../../util/wrapper");
const authentication = require("../../middleware/authentication");

const post = require("./post/controller");
const get = require("./get/controller");
const put = require("./put/controller");

const router = express.Router();

router.post("/", authentication, wrapper(post));
router.get("/", authentication, wrapper(get));
router.put("/:id", authentication, wrapper(put));

module.exports = router;
