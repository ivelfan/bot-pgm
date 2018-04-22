const petskills = require('./petskills');

const generateEmbedPetSkill = (message, data) => {
  const petskillName = data.args.map(arg => arg.trim().toLowerCase()).join(' ').trim();
  let petskillData;
  if (petskills[petskillName]) {
    petskillData = petskills[data.args[0]];
  } else {
    petskillData = petskills[Object.keys(petskills)
      .filter(petskill => (petskills[petskill].aliases.map(e => (e.toLowerCase())).includes(petskillName) || petskills[petskill].titleFr.toLowerCase() === petskillName))[0]];
  }
  if (!petskillData) {
    return message.channel.send('Mmmmmh, je ne connais pas ce skill pet.');
  }
  const fieldsLv = [];
  const fieldsGrades = [];
  const fields = [];
  petskillData.levels.forEach((lvl, index) => {
    fieldsLv.push({ name: `Lv${index + 1}`, value: lvl, inline: !!petskillData.grades.length });
  });
  petskillData.grades.forEach((grade, index) => {
    fieldsGrades.push({
      name: `Rang ${index + 1}`,
      value: grade,
      inline: !!petskillData.levels.length,
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
    title: `${petskillData.title} / ${petskillData.titleFr}`,
    color: 0xff88c7,
    description: `${petskillData.desc}

${petskillData.descFr}`,
    fields: fields.filter(e => (!!e)),
    thumbnail: {
      url: `${data.hostName}/static/images/PetSkills/${petskillData.thumbnail}`,
    },
  };

  return message.channel.send({ embed });
};

module.exports = { generateEmbedPetSkill };
