const express = require("express");

const wrapper = require("../../util/wrapper");

const post = require("./post/controller");

const router = express.Router();

router.post("/", wrapper(post));

module.exports = router;
