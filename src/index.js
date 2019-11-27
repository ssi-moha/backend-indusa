const express = require("express");

const db = require("./service/mongodb");
const { port } = require("./config")();

const app = express();

require("./service/express")(app);

async function start() {
  console.log("listen on", port);
  try {
    await db.connect();
  } catch (err) {
    console.log(err);
  }
}

app.listen(port, start);
