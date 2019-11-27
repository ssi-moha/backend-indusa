const { addClient } = require("../../../database/model/client");

async function post(req, res) {
   const client = await addClient(req.body);
   res.send(client);
}

module.exports = post;