const { ObjectModel } = require("./index");

async function addObject(object) {
  if (await ObjectModel.findOne({ name: object.name })) {
    throw new Error("name already use");
  }
  return new ObjectModel(object).save();
}

function getObject(filters) {
  return ObjectModel.findOne(filters);
}

function updateObject(filters, updates) {
  return ObjectModel.update(filters, updates);
}

module.exports = {
  addObject,
  getObject,
  updateObject
};
