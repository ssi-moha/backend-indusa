const express = require("express");

const api = require("../api/index");
const handleError = require("../middlewares/handleError");

module.exports = app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(api());
  app.use(handleError);
};
