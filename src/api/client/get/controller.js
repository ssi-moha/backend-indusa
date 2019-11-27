const { getClient } = require("../../../database/model/client");

async function get(req, res) {
   const client = await getClient(req.body);
   res.send(client);
}

module.exports = get;