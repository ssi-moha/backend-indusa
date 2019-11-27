const fs = require("fs");

module.exports = () => ({
  uri: process.env.MONGO_URI,
  port: process.env.PORT,
  privateKey: fs.readFileSync(__dirname + "/private.key"),
  publicKey: fs.readFileSync(__dirname + "/public.key")
});
