const { updateStats } = require("../../../database/model/stats");

async function put(req, res) {
   const stats = await updateStats(req.params.id, req.body);
   return stats;
}

module.exports = put;