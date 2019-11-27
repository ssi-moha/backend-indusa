const { updateObject } = require("../../../database/model/object");

async function put(req, res) {
   const object = await updateObject(req.params.id, req.body);
   return object;
}

module.exports = put;