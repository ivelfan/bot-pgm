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
  const sharedSkill = _.get(skills, skillData.linksTo.shared);
  const knightSkill = _.get(skills, skillData.linksTo.knight);
  const archerSkill = _.get(skills, skillData.linksTo.archer);
  const mageSkill = _.get(skills, skillData.linksTo.mage);

  if (!sharedSkill) {
    const fieldHonor = mageSkill.grades ? mageSkill.grades.reduce(
      (acc, value) => {
        acc += `\`* ${value}\`\n`; // eslint-disable-line no-param-reassign
        return acc;
      }
      , '',
    ) : null;
    const embedKnight = knightSkill ? {
      title: `:crossed_swords: ${knightSkill.title} / ${knightSkill.titleFr}`,
      color: 0xca0000,
      thumbnail: {
        url: `${data.hostName}/static/images/Skills/${knightSkill.thumbnail}`,
      },
      fields: [{ name: 'Durée', value: '-', inline: true },
        { name: 'Cast Time', value: '-', inline: true },
        { name: 'Formule', value: '-', inline: true }],
    } : null;
    const embedArcher = archerSkill ? {
      title: `:bow_and_arrow: ${archerSkill.title} / ${archerSkill.titleFr}`,
      color: 0x00b218,
      thumbnail: {
        url: `${data.hostName}/static/images/Skills/${archerSkill.thumbnail}`,
      },
      fields: [{ name: 'Durée', value: '-', inline: true },
        { name: 'Cast Time', value: '-', inline: true },
        { name: 'Formule', value: '-', inline: true }],
    } : null;
    const embedMage = mageSkill ? {
      title: `:comet: ${mageSkill.title} / ${mageSkill.titleFr}`,
      color: 0x30a6ff,
      description: `${mageSkill.desc}

${mageSkill.descFr}`,
      thumbnail: {
        url: `${data.hostName}/static/images/Skills/${mageSkill.thumbnail}`,
      },
      fields: [{ name: 'Durée', value: '-', inline: true },
        { name: 'Cast Time', value: '-', inline: true },
        { name: 'Formule', value: '-', inline: true }],
    } : null;
    if (embedKnight) await message.channel.send({ embed: embedKnight });
    if (embedArcher) await message.channel.send({ embed: embedArcher });
    if (embedMage) {
      if (fieldHonor) embedMage.fields.push({ name: 'Honor', value: fieldHonor || '-', inline: true });
      await message.channel.send({ embed: embedMage });
    }
  } else {
    const fieldHonor = sharedSkill.grades ? sharedSkill.grades.reduce(
      (acc, value) => {
        acc += `\`* ${value}\`\n`; // eslint-disable-line no-param-reassign
        return acc;
      }
      , '',
    ) : null;
    const embed = sharedSkill ? {
      title: `:zap: ${sharedSkill.title} / ${sharedSkill.titleFr}`,
      color: 0xFFB6C1,
      description: `${sharedSkill.desc}

${sharedSkill.descFr}`,
      thumbnail: {
        url: `${data.hostName}/static/images/Skills/${sharedSkill.thumbnail}`,
      },
      fields: [{ name: 'Durée', value: '-', inline: true },
        { name: 'Cast Time', value: '-', inline: true },
        { name: 'Formule', value: '-', inline: true },
        { name: 'Honor', value: fieldHonor || '-', inline: true }],
    } : null;
    if (embed) await message.channel.send({ embed });
  }
  return undefined;
};

module.exports = { generateEmbedAllSkill };
