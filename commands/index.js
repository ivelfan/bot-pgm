const { generateEmbedPetSkill } = require('./petskills');
const { generateEmbedRune } = require('./runes');
const { generateEmbedAllSkill } = require('./skills');
const { getCurrentTime } = require('./time');
const { getPing } = require('./ping');
const { getHelp } = require('./help');
const { getAnnouceHelp, sendTimedAnnounce } = require('./announces');

const commands = {
  generateEmbedPetSkill,
  generateEmbedRune,
  generateEmbedAllSkill,
  getCurrentTime,
  getPing,
  getHelp,
  getAnnouceHelp,
  sendTimedAnnounce,
};

module.exports = commands;
