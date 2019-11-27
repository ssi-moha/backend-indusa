const { StatsModel } = require("./index");

async function addStats(stats) {
  if (await StatsModel.findOne({ login: stats.login })) {
    throw new Error("login already use");
  }
  return new StatsModel(stats).save();
}

function updateStats(filters, updates) {
  return StatsModel.update(filters, updates);
}

function getStats(filters) {
  return StatsModel.findOne(filters);
}

module.exports = {
  addStats,
  updateStats,
  getStats
};
