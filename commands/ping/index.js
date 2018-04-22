module.exports = {
  getPing: async (message, data) => {
    const { channel } = message;
    const m = await channel.send('Ping ?');
    m.edit(`Pong! Latence de discord : ${m.createdTimestamp - message.createdTimestamp}ms. Latence du bot : ${Math.round(data.ping)}ms`);
  },
};
