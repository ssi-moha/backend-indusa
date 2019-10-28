const db = require("../../services/mongodb");
const user = require("./user");
const client = require("./client");
const object = require("./object");
const stats = require("./stats");

const conn = db.getConnect();

const registerSchemas = () => {
  conn.model("User", user);
  conn.model("Client", client);
  conn.model("Object", object);
  conn.model("Stats", stats);
};

module.exports = registerSchemas;
