const db = require("../../services/mongodb");
const registerSchema = require("../schemas/index");
const user = require("../schema/user");
const client = require("../schema/client");
const object = require("../schema/object");
const stats = require("../schema/stats");

registerSchema();

const conn = db.getConnect();

module.exports = {
  UserModel: conn.model("User", user),
  ClientModel: conn.model("Client", client),
  ObjectModel: conn.model("Object", object),
  StatsModel: conn.model("Stats", stats)
};
