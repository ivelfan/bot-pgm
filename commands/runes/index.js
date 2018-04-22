const runes = require('./runes');

const PET_LEVEL_PER_RANK = [40, 80, 100, 150];

const generateEmbedRune = (message, data) => {
  const runeName = data.args[0].toLowerCase().trim();
  let runeData;
  if (runes[runeName]) {
    runeData = runes[data.args[0]];
  } else {
    runeData = runes[Object.keys(runes).filter(rune => (runes[rune].aliases.indexOf(runeName) !== -1 ||
       runes[rune].titleFr.toLowerCase() === runeName))[0]];
  }
  if (!runeData) {
    return message.channel.send('Mmmmmh, je ne connais pas cette rune.');
  }
  const fieldsLv = [];
  const fieldsGrades = [];
  const fields = [];
  runeData.levels.forEach((lvl, index) => {
    fieldsLv.push({ name: `Lv${index + 1}`, value: lvl, inline: !!runeData.grades.length });
  });
  runeData.grades.forEach((grade, index) => {
    fieldsGrades.push({
      name: `Rang ${index + 1} (Pet Lv${PET_LEVEL_PER_RANK[index]})`,
      value: grade,
      inline: !!runeData.levels.length,
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
    title: `${runeData.title} / ${runeData.titleFr}`,
    color: 0xff88c7,
    description: `${runeData.desc}

${runeData.descFr}`,
    fields: fields.filter(element => !!element),
    thumbnail: {
      url: `${data.hostName}/static/images/Runes/${runeData.title}.png`,
    },
  };
  return message.channel.send({ embed });
};

module.exports = { generateEmbedRune };
