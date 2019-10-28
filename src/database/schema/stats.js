const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stats = new Schema({
  date: {
    type: Date,
    required: true
  },
  heure: {
    type: String
  },
  type: {
    type: String,
    required: true
  },
  gencode: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  offer: {
    type: Number,
    required: true
  },
  ticket: {
    type: String,
    required: true
  },
  payment: {
    type: String,
    required: true
  },
  _idstatss: {
    type: [Schema.Types.ObjectId],
    default: []
  },
  _idClients: {
    type: [Schema.Types.ObjectId],
    default: []
  }
});

module.exports = stats;
