const { generateEmbedPetSkill } = require('./petskills');
const { generateEmbedRune } = require('./runes');
const { getCurrentTime } = require('./time');
const { getPing } = require('./ping');
const { getHelp } = require('./help');
const { getAnnouceHelp, sendTimedAnnounce } = require('./announces');

const commands = {
  generateEmbedPetSkill,
  generateEmbedRune,
  getCurrentTime,
  getPing,
  getHelp,
  getAnnouceHelp,
  sendTimedAnnounce,
};

module.exports = commands;
