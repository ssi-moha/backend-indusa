const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const object = new Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = object;
