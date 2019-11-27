const express = require("express");

const api = require("../api");
const handleError = require("../middleware/handleError");

module.exports = app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(api);
  app.use(handleError);
};
