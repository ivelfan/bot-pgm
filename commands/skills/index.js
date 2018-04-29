const { skills } = require('./skills');
const _ = require('lodash');

const generateEmbedAllSkill = async (message, data) => {
  const skillName = data.args[0].toLowerCase().trim();
  let skillData;
  if (skills.all[skillName]) {
    skillData = skills.all[data.args[0]];
  }
  if (!skillData) {
    return message.channel.send('Mmmmmh, je ne connais pas ce skill.');
  }
  // const fieldsLv = [];
  // const fieldsGrades = [];
  // const fields = [];
  const knightSkill = _.get(skills, skillData.linksTo[0]);
  const archerSkill = _.get(skills, skillData.linksTo[1]);
  const mageSkill = _.get(skills, skillData.linksTo[2]);
  // skillData.levels.forEach((lvl, index) => {
  //   fieldsLv.push({ name: `Lv${index + 1}`, value: lvl, inline: !!skillData.grades.length });
  // });
  // skillData.grades.forEach((grade, index) => {
  //   fieldsGrades.push({
  //     name: `Rang ${index + 1}`,
  //     value: grade,
  //     inline: !!skillData.levels.length,
  //   });
  // });
  // while (fieldsLv.length || fieldsGrades.length) {
  //   if (fieldsLv.length) {
  //     fields.push(fieldsLv.shift());
  //   }
  //   if (fieldsGrades.length) {
  //     fields.push(fieldsGrades.shift());
  //   }
  // }
  const embedKnight = {
    title: `${knightSkill.title} / ${knightSkill.titleFr}`,
    color: 0xca0000,
    thumbnail: {
      url: `${data.hostName}/static/images/Skills/${knightSkill.thumbnail}`,
    },
  };
  const embedArcher = {
    title: `${archerSkill.title} / ${archerSkill.titleFr}`,
    color: 0x00b218,
    thumbnail: {
      url: `${data.hostName}/static/images/Skills/${archerSkill.thumbnail}`,
    },
  };
  const embedMage = {
    title: `${mageSkill.title} / ${mageSkill.titleFr}`,
    color: 0x30a6ff,
    description: `${mageSkill.desc}

${mageSkill.descFr}`,
    thumbnail: {
      url: `${data.hostName}/static/images/Skills/${mageSkill.thumbnail}`,
    },
  };

  await message.channel.send({ embed: embedKnight });
  await message.channel.send({ embed: embedArcher });
  await message.channel.send({ embed: embedMage });
  return undefined;
};

module.exports = { generateEmbedAllSkill };
