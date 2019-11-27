const { getStats } = require("../../../database/model/stats");

async function get(req, res) {
   const stats = await getStats(req.query);
   res.send(stats);
}

module.exports = get;