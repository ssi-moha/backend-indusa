const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const client = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = client;
