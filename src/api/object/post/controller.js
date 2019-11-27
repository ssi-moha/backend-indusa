const { addObject } = require("../../../database/model/object");

async function get(req, res) {
   const object = await addObject(req.body);
   res.send(object);
}

module.exports = get;