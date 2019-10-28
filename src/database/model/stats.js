const { StatsModel } = require("./index");

async function addStats(stats) {
  if (await StatsModel.findOne({ login: stats.login })) {
    throw new Error("login already use");
  }
  return new StatsModel(stats);
}

module.exports = {
  addStats
};
