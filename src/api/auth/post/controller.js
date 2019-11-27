const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

const { privateKey } = require("../../../config")();
const { getUser } = require("../../../database/model/user");

async function post(req, res) {
   const user = await getUser({ login: req.body.login });
   if (!user) throw new Error("User not found");
   if (!(await bcrypt.compare(req.body.password, user.password)))
      throw new Error("Wrong password");
   const token = jwt.sign({ id: user._id }, privateKey);
   res.send({ token });
}

module.exports = post;