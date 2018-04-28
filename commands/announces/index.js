const announces = require('./announces');

const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
module.exports = {
  sendTimedAnnounce: (guild) => {
    let isTime = false;
    let target;
    let channel;
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const min = date.getMinutes();
    announces.broadcasts.forEach((broadcast) => {
      broadcast.times.forEach((time) => {
        if (time.days.indexOf(day) > -1 && time.hours.indexOf(hour) > -1 && time.mins.indexOf(min) > -1) {
          isTime = true;
        }
      });
      if (isTime) {
        channel = guild.channels.find('name', broadcast.channel);
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
  },
  getAnnouceHelp: (message, data) => {
    const { member } = message;
    let m;
    if (member.roles.find('name', 'Modo') || member.roles.find('name', 'Botty_devs')) {
      let isSent = false;
      let channel;
      let target;
      announces.broadcasts.forEach((broadcast) => {
        if (broadcast.name === data.args[0]) {
          channel = message.guild.channels.find('name', data.devChannelName || broadcast.channel);
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
          channel = message.guild.channels.find('name', data.devChannelName || broadcast.channel);
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
        member.send(m);
      }
    }
  },
};
