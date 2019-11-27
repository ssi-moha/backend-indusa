const { updateClient } = require("../../../database/model/client");

async function put(req, res) {
   const client = await updateClient(req.params.id, req.body);
   return client;
}

module.exports = put;