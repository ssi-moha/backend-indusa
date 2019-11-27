const bcrypt = require("bcryptjs");

const { UserModel } = require("./index");

async function addUser(user) {
  if (await UserModel.findOne({ login: user.login })) {
    throw new Error("login already use");
  }
  user.password = await bcrypt.hash(user.password, 10);
  return new UserModel(user).save();
}

function updateUser(filters, updates) {
  return UserModel.update(filters, updates);
}

function getUser(filters) {
  return UserModel.findOne(filters);
}

module.exports = {
  addUser,
  updateUser,
  getUser
};
