const Discord = require('discord.js');

const bot = new Discord.Client();
const http = require('http');
// Config
const config = require('./config.json');
const chat = require('./chat.json');
const announce = require('./announce.json');
const runes = require('./runes');
const petskills = require('./petskills');
const path = require('path');
const fs = require('fs');
const url = require('url');

const devChannelName = process.env.NODE_ENV !== 'production' ? 'botty-test' : '';
let devChannel;
// Dummy http server to avoid toggling state on Heroku. Can be useful later
const hostName = process.env.NODE_ENV !== 'production' ? 'http://localhost:1337' : 'http://botpgm.herokuapp.com';
const port = process.env.PORT || 1337;
const PET_LEVEL_PER_RANK = [40, 80, 100];

const requestHandler = (req, res) => {
  // parse URL
  const parsedUrl = url.parse(req.url);
  // extract URL path
  let pathname = `.${parsedUrl.pathname}`;
  // based on the URL path, extract the file extention. e.g. .js, .doc, ...
  const { ext } = path.parse(pathname);
  // maps file extention to MIME typere
  const map = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
  };

  fs.exists(pathname, (exist) => {
    if (!exist) {
      // if the file is not found, return 404
      res.statusCode = 404;
      res.end(`File ${pathname} not found!`);
      return;
    }

    // if is a directory search for index file matching the extention
    if (fs.statSync(pathname).isDirectory()) pathname += `/index${ext}`;

    // read file from file system
    fs.readFile(pathname, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        // if the file is found, set Content-type and send data
        res.setHeader('Content-type', map[ext] || 'text/plain');
        res.end(data);
      }
    });
  });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  return console.log(`server is listening on ${port}`);
});

// Prevent DYNO from sleeping :)
setInterval(() => {
  http.get(hostName);
}, 300000);

// Demarrage
bot.on('ready', () => {
  console.log(`INFO : Program ${config.bot.name} has started !`);
  // Get devChannel on dev mode
  bot.guilds.forEach((guild) => {
    if (guild.available && devChannelName) {
      devChannel = guild.channels.find('name', devChannelName);
    }
  });
  // Back message
  bot.guilds.forEach((guild) => {
    if (guild.available) {
      if (devChannel) {
        //  devChannel.send(`I'm back bitches!`);
      } else {
        guild.channels.find('name', 'idle-ro_discussion').send('I\'m back bitches!');
      }
    }
  });
  // Back message
  // Messages automatiques
  bot.setInterval(() => {
    let channel;
    let target;
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const min = date.getMinutes();
    bot.guilds.forEach((guild) => {
      if (guild.available) {
        announce.broadcasts.forEach((broadcast) => {
          // Temps
          let isTime = false;
          broadcast.times.forEach((time) => {
            if (time.days.indexOf(day) > -1 && time.hours.indexOf(hour) > -1 && time.mins.indexOf(min) > -1) {
              isTime = true;
            }
          });
          if (isTime) {
            channel = guild.channels.find('name', devChannel || broadcast.channel);
            if (channel) {
              // Cible
              if (broadcast.role) {
                target = guild.roles.find('name', broadcast.role);
              } else if (broadcast.user) {
                target = guild.members.find('displayName', broadcast.user);
              } else {
                target = false;
              }
              // Message
              if (target) {
                channel.send(`${target} : ${broadcast.msg}`);
              } else {
                channel.send(broadcast.msg);
              }
            }
          }
        });
      }
    });
  }, 60000);
});

// Pour chaque message
bot.on('message', async (message) => {
  const messageClean = message.content.trim().toLowerCase();
  const { author: sender, member } = message;
  let m;
  if (sender.bot) return; // Ignore les autres bots

  const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

  // Chat
  if (message.channel.name === devChannelName || config.bot.canalflood) {
    chat.converse.forEach((converse) => {
      if ((!converse.botname && messageClean.indexOf(config.bot.shortname) === -1)
        || (converse.botname && messageClean.indexOf(config.bot.shortname) > -1)) {
        let isTalk = true;
        converse.questions.forEach((question) => {
          let isTalkQuestion = false;
          question.words.forEach((word) => {
            if ((converse.lookup === 'partial' && messageClean.indexOf(word) > -1) ||
            (converse.lookup === 'specific' && messageClean === word) ||
            (converse.lookup === 'specific' && converse.botname && !!messageClean.match(new RegExp(word)))) {
              isTalkQuestion = true;
            }
          });
          if (!isTalkQuestion) {
            isTalk = false;
          }
        });
        if (isTalk && !devChannelName) {
          message.reply(converse.answer);
        }
      }
    });
  }

  // Commmndes du bot
  if (message.content.indexOf(config.bot.prefix) === 0) {
    const args = message.content.slice(config.bot.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // Commande help
    if (command === 'help') {
      m = 'Commandes utilisateurs : !ping !time';
      if (member.roles.find('name', 'Modo') || member.roles.find('name', 'Botty_devs')) {
        m += '\nCommandes admin : !announce';
      }
      message.author.send(m);
    }


    // Commande ping
    if (command === 'ping') {
      const channel = devChannelName ? devChannel : message.channel;
      m = await channel.send('Ping ?');
      m.edit(`Pong! Latence de discord : ${m.createdTimestamp - message.createdTimestamp}ms. Latence du bot : ${Math.round(bot.ping)}ms`);
    }

    // Commande time
    if (command === 'time') {
      const date = new Date();
      let heures = date.getHours(); if (heures < 10) { heures = `0${heures}`; }
      let minutes = date.getMinutes(); if (minutes < 10) { minutes = `0${minutes}`; }
      let secondes = date.getSeconds(); if (secondes < 10) { secondes = `0${secondes}`; }
      m = `Nous sommes ${jours[date.getDay()]} ${date.getDate()} ${mois[date.getMonth()]} ${date.getFullYear()}. `;
      m += `Il est : ${heures}:${minutes}:${secondes}.`;
      message.reply(m);
    }
    // Commande rune
    if (command === 'rune') {
      const runeName = args[0].toLowerCase().trim();
      let runeData;
      if (runes[runeName]) {
        runeData = runes[args[0]];
      } else {
        runeData = runes[Object.keys(runes).filter(rune => (runes[rune].aliases.indexOf(runeName) !== -1 ||
           runes[rune].titleFr.toLowerCase() === runeName))[0]];
      }
      if (!runeData) {
        message.channel.send('Mmmmmh, je ne connais pas cette rune.');
        return;
      }
      const fields = [];

      runeData.levels.forEach((lvl, index) => {
        fields.push({ name: `Lv${index + 1}`, value: lvl, inline: true });
      });
      runeData.grades.forEach((grade, index) => {
        fields.push({
          name: `Rang ${index + 1} (Pet Lv${PET_LEVEL_PER_RANK[index]})`,
          value: grade,
          inline: true,
        });
      });

      // Coô-Ky tente la mise en mage des data, mais manque un runeData.grades quelque part
      /*
     runeData.levels.forEach((lvl, index) => {
      fields.push({name : `Lv${index+1}`, value : lvl, inline:true}) && `&#09;` &&
      fields.push({name: `Pet E${PET_LEVEL_PER_RANK[index]}`, value : grade, inline:true})
      });
     */
      const embed = {
        title: `${runeData.title} / ${runeData.titleFr}`,
        color: 0xff88c7,
        description: `${runeData.desc}

${runeData.descFr}`,
        fields,
        thumbnail: {
          url: `${hostName}/static/images/Runes/${runeData.title}.png`,
        },
      };
      message.channel.send({ embed });
      return;
    }


    // Commande Petskills (ajouter !petskill / !PS / !Pskill / !pskill)
    if (['petskill', 'ps', 'pskill'].indexOf(command) !== -1) {
      const petskillName = `${args[0].toLowerCase().trim()} ${args[1].toLowerCase().trim()}`.trim();
      let petskillData;
      if (petskills[petskillName]) {
        petskillData = petskills[args[0]];
      } else {
        petskillData = petskills[Object.keys(petskills)
          .filter(petskill => (petskills[petskill].aliases.indexOf(petskillName) !== -1 || petskills[petskill].titleFr.toLowerCase() === petskillName))[0]];
      }
      if (!petskillData) {
        message.channel.send('Mmmmmh, je ne connais pas et skill pet.');
        return;
      }
      const fields = [];

      petskillData.levels.forEach((lvl, index) => {
        fields.push({ name: `Lv${index + 1}`, value: lvl, inline: true });
      });
      petskillData.grades.forEach((grade, index) => {
        fields.push({ name: `Rang ${index + 1}`, value: grade, inline: true });
      });

      const embed = {
        title: `${petskillData.title} / ${petskillData.titleFr}`,
        color: 0xff88c7,
        description: `${petskillData.desc}

${petskillData.descFr}`,
        fields,
      };

      message.channel.send({ embed });
      return;
    }

    // Commande help
    if (command === 'announce') {
      if (member.roles.find('name', 'Modo') || member.roles.find('name', 'Botty_devs')) {
        let isSent = false;
        let channel;
        let target;
        announce.broadcasts.forEach((broadcast) => {
          if (broadcast.name === args[0]) {
            channel = message.guild.channels.find('name', devChannelName || broadcast.channel);
            if (channel) {
              // Cible
              if (broadcast.role) {
                target = message.guild.roles.find('name', broadcast.role);
              } else if (broadcast.user) {
                target = message.guild.members.find('displayName', broadcast.user);
              } else { target = false; }
              // Message
              if (target) {
                channel.send(`${target} : ${broadcast.msg}`);
              } else {
                channel.send(broadcast.msg);
              }
              isSent = true;
            }
          } else {
            channel = message.guild.channels.find('name', devChannelName || broadcast.channel);
            m += `${broadcast.name} : A `;
            if (broadcast.role) { m += `@${broadcast.role}`; }
            if (broadcast.user) { m += `@${broadcast.user}`; }
            m += ` dans ${channel}`;
            broadcast.times.forEach((time) => {
              m += ' : ';
              time.days.forEach((day) => { m += `${jours[day]} `; });
              time.hours.forEach((hour) => { m += `${hour}h `; });
              time.mins.forEach((min) => { m += `${min}min `; });
            });
            m += ' \n';
          }
        });
        if (!isSent) {
          if (devChannelName) {
            member.send(m);
          } else {
            member.send(m);
          }
        }
      }
    }
  }
});

bot.login(config.bot.token);
