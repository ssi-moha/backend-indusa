const { getUser } = require("../../../database/model/user");

async function get(req, res) {
   const user = await getUser(req.query);
   res.send(user);
}

module.exports = get;