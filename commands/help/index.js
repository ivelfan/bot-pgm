module.exports = {
  getHelp: (member) => {
    let m = `**Commandes utilisateurs** :
**!ping** : Afficher la latence du serveur
**!time** : Donne l'heure (au cas où vous n'auriez pas de montre...)
**!rune** _rune_ : Affiche des informations sur la rune _rune_ (ex: !rune ahstayi)
**!petskill** _petskill_ : Affiche des informations sur let skill pet _petskill_ (!petskill shield of tardy)
**!ps** : Alias pour !petskill
**!pskill** : Alias pour !petskill
`;
    if (member.roles.find('name', 'Modo') || member.roles.find('name', 'Botty_devs')) {
      m += `
**Commandes admin** :
**!announce** : Affiche la liste des différentes annonces et dans quel channel elles se déclenchent
`;
    }
    return member.send(m);
  },
};
