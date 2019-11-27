const mongoose = require('mongoose');

const { uri } = require('../config')();

async function connect() {
  await mongoose.connect(uri, { autoIndex: false, useNewUrlParser: true });
  console.log('database connected');
}

const getConnect = () => mongoose.connection;

async function disconnect() {
  await mongoose.disconnect();
  console.log('database disconnected');
}

module.exports = {
  connect,
  getConnect,
  disconnect,
};
