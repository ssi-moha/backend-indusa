const { addUser } = require("../../../database/model/user");

async function post(req, res) {
   const user = await addUser(req.body);
   res.send(user);
}

module.exports = post;