const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  _idClients: {
    type: [Schema.Types.ObjectId],
    default: []
  }
});

module.exports = user;
