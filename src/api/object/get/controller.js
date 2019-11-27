const { getObject } = require("../../../database/model/object");

async function get(req, res) {
   const object = await getObject(req.query);
   res.send(object);
}

module.exports = get;