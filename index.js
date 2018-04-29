const Discord = require('discord.js');
const http = require('http');
// Config
const config = require('./config.json');
const chat = require('./chat.json');
const commands = require('./commands');
const { server } = require('./server');

const bot = new Discord.Client();
const devChannelName = process.env.NODE_ENV !== 'production' ? 'botty-test' : '';


const hostName = process.env.NODE_ENV !== 'production' ? 'http://localhost:1337' : 'http://botpgm.herokuapp.com';
const port = process.env.PORT || 1337;

let devChannel;

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  return console.log(`server is listening on ${port}`);
});

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
        // guild.channels.find('name', 'idle-ro_discussion').send('I\'m back bitches!');
      }
    }
  });
  // Back message
  // Messages automatiques
  bot.setInterval(() => {
    bot.guilds.forEach((guild) => {
      if (guild.available) {
        commands.sendTimedAnnounce(guild);
      }
    });
  }, 60000);
});

// Pour chaque message
bot.on('message', async (message) => {
  const messageClean = message.content.trim().toLowerCase();
  const { author: sender, member } = message;
  if (sender.bot) return; // Ignore les autres bots
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
      commands.getHelp(member);
    }

    // Commande ping
    if (command === 'ping') {
      const { ping } = bot;
      commands.getPing(message, { ping });
    }

    // Commande time
    if (command === 'time') {
      commands.getCurrentTime(message);
    }
    // Commande rune
    if (['rune', 'runes'].indexOf(command) !== -1) {
      commands.generateEmbedRune(message, { args, hostName });
    }

    // Commande Petskills
    if (['petskill', 'ps', 'pskill'].indexOf(command) !== -1) {
      commands.generateEmbedPetSkill(message, { args, hostName });
    }

    // Commande Petskills
    if (['skill', 's', 'skills'].indexOf(command) !== -1) {
      console.log(message);
      commands.generateEmbedSkill(message, { args, hostName });
    }


    // Commande help
    if (command === 'announce') {
      commands.getAnnouceHelp(message, { args, devChannelName });
    }
  }
});

bot.login(config.bot.token);
