const jwt = require('jsonwebtoken');

const { publicKey } = require("../config")();
const { UserModel } = require("../database/model");

async function authenticate(req, res, next) {
   const token = await jwt.verify(req.headers.authorization, publicKey);
   const user = await UserModel.findById(token.id);
   if (!user)
      throw new Error("Bad token");
   next();
}

module.exports = authenticate;