const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

module.exports = {
  getCurrentTime: (message) => {
    let m;
    const date = new Date();
    let heures = date.getHours(); if (heures < 10) { heures = `0${heures}`; }
    let minutes = date.getMinutes(); if (minutes < 10) { minutes = `0${minutes}`; }
    let secondes = date.getSeconds(); if (secondes < 10) { secondes = `0${secondes}`; }
    m = `Nous sommes ${jours[date.getDay()]} ${date.getDate()} ${mois[date.getMonth()]} ${date.getFullYear()}. `;
    m += `Il est : ${heures}:${minutes}:${secondes}.`;
    return message.reply(m);
  },
};
