const skills = require('./skills');

const generateEmbedSkill = (message, data) => {
  const skillName = data.args[0].toLowerCase().trim();
  let skillData;
  if (skills[skillName]) {
    skillData = skills[data.args[0]];
  } else {
    const matchedAlias = Object.keys(skills).filter(skill => (skills[skill].aliases.indexOf(skillName) !== -1));
    [skillData] = matchedAlias;
  }
  if (!skillData) {
    return message.channel.send('Mmmmmh, je ne connais pas ce skill.');
  }
  const fieldsLv = [];
  const fieldsGrades = [];
  const fields = [];
  skillData.levels.forEach((lvl, index) => {
    fieldsLv.push({ name: `Lv${index + 1}`, value: lvl, inline: !!skillData.grades.length });
  });
  skillData.grades.forEach((grade, index) => {
    fieldsGrades.push({
      name: `Rang ${index + 1}`,
      value: grade,
      inline: !!skillData.levels.length,
    });
  });
  while (fieldsLv.length || fieldsGrades.length) {
    if (fieldsLv.length) {
      fields.push(fieldsLv.shift());
    }
    if (fieldsGrades.length) {
      fields.push(fieldsGrades.shift());
    }
  }
  const embed = {
    title: `${skillData.title.join(', ')} / ${skillData.titleFr.join(', ')}`,
    color: 0xff88c7,
    description: `${skillData.desc}

${skillData.descFr}`,
    fields: fields.filter(element => !!element),
    thumbnail: {
      url: `${data.hostName}/static/images/skills/${skillData.title[0]}.png`,
    },
  };
  console.log(embed);
  return message.channel.send({ embed });
};

module.exports = { generateEmbedSkill };
