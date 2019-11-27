const { addStats } = require("../../../database/model/stats");

async function post(req, res) {
   const stats = await addStats(req.body);
   res.send(stats);
}

module.exports = post;