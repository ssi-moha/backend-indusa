const { updateUser } = require("../../../database/model/user");

async function put(req, res) {
   const user = await updateUser(req.params.id, req.body);
   return user;
}

module.exports = put;