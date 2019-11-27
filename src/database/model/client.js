const { ClientModel } = require("./index");

async function addClient(client) {
  if (await ClientModel.findOne({ name: client.name })) {
    throw new Error("name already use");
  }
  return new ClientModel(client).save();
}

function getClient(filters) {
  return ClientModel.findOne(filters);
}

function updateClient(filters, updates) {
  return ClientModel.update(filters, updates);
}

module.exports = {
  addClient,
  getClient,
  updateClient
};
