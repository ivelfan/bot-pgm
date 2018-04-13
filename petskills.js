module.exports = {
	"Attack Strengthen": {
		title: "Attack Strengthen",
		titleFr: "Renforcer Attaque",
		aliases: ["attack strenghten", "renforcer attaque", "atack strenghten", "renforce attaque", 
			  "Atack strengten", "attaque renforcer", "attack strengthen", "attaque renforcé", 
			  "atack strengthen", "attack strength", "strenghten attack", "strengthen attack", "AS"],
		desc:
			"Increase the normal attack DMG of all our friends",
		descFr: `Augmente les dégâts d'attaque de tous vos amis`,
		levels: [],
		grades: ["C50 Orc Archer", "C80 Andre, Deniro", "C100 Evil Skeleton, Orc Warrior"]
	},
	"Attack Terminator": {
		title: "Attack Terminator",
		titleFr: "Attaque Terminator",
		aliases: ["attack terminator", "attaque terminator", "attak terminator", "attaque termi", 
			  "attack termi", "atack terminator", "AT"],
		desc:
			"Deals DMG to weakest enemy",
		descFr: `Inflige dégâts à l'ennemi le plus faible`,
		levels: ["-", "DMG ↑ if low-HP enemy", "DMG ↑ if low-HP enemy", "May cause instant kill"],
		grades: ["C35 Baphomet Jr / C60 High Orc",
			"C100 Baphomet / C110 Jakk",
			"C100 Any Blue pet",
			"C150 Baphomet, Baphomet Jr / C150 Jakk, High Orc"]
	},
	Awaken: {
		title: "Awaken",
		titleFr: "Eveiller",
		aliases: ["awaken", "eveiller", "groupe SP", "awake", "eveille", "group sp", "éveiller", "sp groupe", 
			  "éveille", "sp group", "éveil", "eveil"],
		desc: "Restores SP to all allies",
		descFr: `Restaure des SP à tous les alliés`,
		levels: [],
		grades: ["C50 Muka", "C100 Thief Bug", "C100 Muka, Marc"]
	},
	Bloodshot: {
		title: "Bloodshot",
		titleFr: "Sanguin / Tueur de costauds",
		aliases: ["bloodshot", "sanguin", "blood shot", "tueur de costaud", "blodshot", "tueur de costauds"],
		desc: "Deal DMG to strongest enemy",
		descFr: `Inflige des degats à l'ennemi le plus fort`,
		levels: ["-", "Enemy tank HP↑ = DMG ↑", "Enemy tank HP↑ = DMG ↑", "-"],
		grades: ["C50 Golden Thief Bug / C80 Angeling", "C80 Baphomet / C100 Jakk", "PvP Master 25-50%"]
	},
	Concentration: {
		title: "Concentration",
		titleFr: "Concentration",
		aliases: ["concentration"],
		desc: "Restore SP to lowest SP ally",
		descFr: `Restaure des SP à l'allié le plus faible`,
		levels: ["-", "-", "Lowers SP consumption", "Huge SP cost reduction for the next skill"],
		grades: ["C50 Gargoyle", "C100 Munak", "C100 Bon Gun", "C150 Marc, Muka"]
	},
	"Controlled Enhance": {
		title: "Controlled Enhance",
		titleFr: "Contrôle amélioré",
		aliases: ["Controlled Enhance", "contrôle amélioré", "Control Enhance", "controle amélioré", 
			  "Controled Enhance", "controle amelioré", "enhance control", "controle ameliore", 
			  "contrôle améliore", "contrôle amelioré", "CE"],
		desc: "During a certain period, every effective CC will cause the opponents to lose HP",
		descFr: `Pendant une certaine période, chaque CC effectif fait perdre des HP aux ennemis`,
		levels: ["-", "-", "increase CC duration"],
		grades: ["Treasure Map Only", "Treasure Map Only", "Treasure Map Only"]
	},
	"Counter Attack": {
		title: "Counter Attack",
		titleFr: "Contre-attaque",
		aliases: ["counter attack", "contre attaque", "counter", "counter atack", "contre-attaque", 
			  "contre", "counter attak", "contreattaque", "counter attaque", "counterattack", "CA"],
		desc: "Reflects damage",
		descFr: `Reflechit des dommages`,
		levels: ["-", "-", "Reflected DMG restore HP"],
		grades: ["C50 Yoyo", "C100 Goblin (HP) -_-", "C120 Deniro"]
	},
	Cure: {
		title: "Cure",
		titleFr: "Soin",
		aliases: ["cure", "soin", "heal"],
		desc: "Heals weakest ally",
		descFr: `Soigne l'allié le plus faible`,
		levels: ["-", "-", "DMG taken ↓", "ASPD ↑ & Cast ↓"],
		grades: ["C50 Archer Skeleton", "C100 Evil Skeleton", "C100 Poporing, Poring", "Rebirth 4"]
	},
	"DMG Share": {
		title: "DMG Share",
		titleFr: "Partager Dégâts",
		aliases: ["dmg share", "partager degats", "partager degat", "damage share", "partager dégats", 
			  "partager dégat", "share dmg", "partager dégâts", "partager dégât", "share damage", 
			  "partager degâts", "partager degât", "dmgshare", "degats partager", "degats partagé", 
			  "dégats partager", "dégats partagé", "dégâts partager", "dégâts partagé", "degâts partager", 
			  "degâts partagé"],
		desc: "Split damage taken with an ally",
		descFr: `Partage les dommages avec un allié`,
		levels: ["-", "DMG taken ↓", "DMG taken ↓"],
		grades: ["Player lvl110",
			"C80 Andre, Vitata",
			"C100 Poporing, Hornet"]
	},
	"Element Delay": {
		title: "Element Delay",
		titleFr: "Ralentissement élémentaire",
		aliases: ["element delay", "ralentissement elementaire", "elemental delay", "ralentissement élementaire", 
			  "élement delay", "ralentissement élémentaire", "ED"],
		desc: "Increases cast time for all enemies",
		descFr: `Augmente le temps de cast des ennemis`,
		levels: ["-", "-", "Ignore Cast speed buffs"],
		grades: ["Treasure Map Only", "Treasure Map Only", "Treasure Map Only"]
	},
	Fanatic: {
		title: "Fanatic",
		titleFr: "Fanatique",
		aliases: ["Fanatic", "fanatique", "crit", "fnatic", "fnatique", "fantic", "fantique"],
		desc: "Boosts crit chance for all allies",
		descFr: `Booste le taux de CRIT des alliés`,
		levels: ["-", "1 CRIT guarantee", "2 CRIT guarantee", "3 CRIT guarantee"],
		grades: ["C50 Poporing",
			 "C100 Goblin (Def) :(",
			 "C100 Orc Archer, Gargoyle",
			 "C150 Pirate Skeleton, Archer Skeleton"]
	},
	Firmness: {
		title: "Firmness",
		titleFr: "Fermeté",
		aliases: ["firmness", "fermeté", "firmeness", "fermete"],
		desc: "Become immune to special effects (still vulnerable to CC)",
		descFr: `Protège un ami des effets spéciaux mais sera blessé par les CC`,
		levels: [],
		grades: ["C30 Whisper, Orc Baby", 
			 "C100 Golden Thief Bug / C110 Angeling", 
			 "C100 Ghostring, Deviling"]
	},
	"Follow-up": {
		title: "Follow-up",
		titleFr: "Suivi",
		aliases: ["follow up", "suivi", "follow-up", "suivie", "followup", "FU"],
		desc: "Attacks 1 enemy three times",
		descFr: `Attaque 1 ennemi 3 fois`,
		levels: ["-",
			"2nd hit ignore part of DEF, 3rd hit bonus crit chance",
			"2nd hit ignore part of DEF, 3rd hit is a crit",
			"Can apply random debuff"],
		grades: ["C50 Gobelin Archer",
			"C80 Goblin (Atk) O.O, Goblin (Crit) :D",
			"C100 Andre, Goblin (Def) :(",
			"C150 Steam Gobelin, King Gobelin"]
	},
	"Frost Diver": {
		title: "Frost Diver",
		titleFr: "Plongeur de givre",
		aliases: ["frost driver", "plongeur de givre", "frost diver", "givre", "FD"],
		desc: "DMG & Freezes (single target)",
		descFr: `Inflige des dégâts à un ennemi et le gel`,
		levels: ["-", "-", "Long duration"],
		grades: ["C50 Drainliar", "C100 Tarou", "C120 Angeling"]
	},
	"Group Assassination": {
		title: "Group Assassination",
		titleFr: "Assassinat groupé",
		aliases: ["group assassination", "assassination group", "assassination groupe", "group assasination", 
			  "assasination group", "assasination groupe", "groupe assassination", "assassination group", 
			  "assassination groupe", "groupe assasination", "assasination group", "assasination groupe", 
			  "assassination groupé", "assasination groupé", "assassination groupé", "assasination groupé"],
		desc: "Deals damage to all enemies /n HP recovery if cast cancelled",
		descFr: `Inflige des dégâts à tous les ennemis /n Restitue des HP si le sort est annulé`,
		levels: [],
		grades: ["Treasure Map Only", "Treasure Map Only", "Treasure Map Only"]
	},
	"Group Awaken": {
		title: "Group Awaken",
		titleFr: "Eveiller groupe",
		aliases: ["group awaken", "groupe eveil", "éveiller group", "awaken group", "groupe eveiller", 
			  "éveiller groupe", "groupe awaken", "eveiller group", "éveille groupe", "awaken group", 
			  "eveiller groupe", "eveille groupe", "group awake", "gawake", "gawaken"],
		desc: "Restores SP to all over time",
		descFr: `Restaure SP en continue à tous les alliés`,
		levels: [],
		grades: ["C50 Orc Warrior", "C100 Hydra", "C120 Any Purple pet"]
	},
	"Group Counter": {
		title: "Group Counter",
		titleFr: "Contre-attaque (groupe)",
		aliases: ["group counter", "contre attaque groupe", "groupe counter", "contre-attaque groupe", 
			  "counter group", "contre attaque group", "counter groupe", "contre-attaque group", "GC"],
		desc: "Everyone reflects damage",
		descFr: `Renvoie (certains) DGT subis par mes alliés`,
		levels: [],
		grades: ["C50 Bon Gun", "C100 Wilow", "C120 High Orc"]
	},
	"Group Freeze": {
		title: "Group Freeze",
		titleFr: "Geler groupe",
		aliases: ["group freeze", "geler groupe", "freeze group", "geler group", "freeze groupe", 
			  "groupe geler", "group frozen", "groupe gel", "CC geler", "gel groupe", "CCfreeze", 
			  "gel group", "CC freeze", "CC gel", "Gfreeze", "Ggeler", "GF", "Ggel", "Ggel"],
		desc: "Freezes all enemies",
		descFr: `Gèle tous les ennemis`,
		levels: [],
		grades: ["C50 Bigfoot", "C100 Goblin (Atk) O.O", "C120 Smokie"]
	},
	"Group Restore": {
		title: "Group Restore",
		titleFr: "Restaurer groupe",
		aliases: ["group restore", "restaurer groupe", "groupe restore", "restaurer group", "restore group", "restaure group", "restore groupe", "restaure groupe"],
		desc: "Heals all allies over time",
		descFr: `Restaure HP en continu à tous les alliés`,
		levels: [],
		grades: ["C50 Creamy", "C100 Mandragora", "C120 Any pet lvl120"]
	},
	"Group Sleep": {
		title: "Group Sleep",
		titleFr: "Sommeil de groupe",
		aliases: ["group sleep", "sommeil de groupe", "groupe sleep", "sommeil groupe", "CC sleep", "sommeil de group", "sleep CC", "sommeil group"],
		desc: "Sleeps all enemies",
		descFr: `Endors tous les ennemis`,
		levels: [],
		grades: ["C50 Eclipse", "C100 Goblin (Crit) :D", "C120 Isis"]
	},
	"Group Stone": {
		title: "Group Stone",
		titleFr: "Pierre de malédiction groupe",
		aliases: ["group stone", "pierre de malediction de groupe", "groupe stone", "pierre de malediction groupe", "CC stone", "pierre de malediction de group", "stone CC", "pierre de malediction group", "pierre de malédiction de groupe", "pierre de malédiction groupe", "pierre de malédiction de group", "pierre de malédiction group"],
		desc: "Petrifies all enemies",
		descFr: `Pétrifie tous les ennemis`,
		levels: [],
		grades: ["C50 Hornet", "C100 Vadon", "C120 Rotar Zairo"]
	},
	"Group Strengthen": {
		title: "Group Strengthen",
		titleFr: "Renforcer groupe",
		aliases: ["group strengthen", "renforcer groupe", "groupe renforcer", "group strenghten", "renforce groupe", "groupe renforce", "group strengten", "renforcé groupe", "groupe renforcé", "groupe strengthen", "renforcer group", "groupe strenghten", "renforce group", "groupe strengten", "renforcé group", "strengthen group", "strengthen groupe", "strenghten group", "strenghten groupe", "strengten group", "strengten groupe"],
		desc: "Increase DEF (all allies)",
		descFr: `Augmente la DEF de tous les alliés`,
		levels: [],
		grades: ["C50 Pirate Skeleton", "C100 Andre", "C120 Drops, Argiope"]
	},
	"Group Stun": {
		title: "Group Stun",
		titleFr: "Etourdir groupe",
		aliases: ["group stun", "étourdir groupe", "groupe stun", "etourdir groupe", "CC stun", "étourdir group", "stun CC", "etourdir group"],
		desc: "Stuns all enemies",
		descFr: `Etourdi tous les ennemis`,
		levels: [],
		grades: ["C50 Farmiliar", "C100 Rocker", "C120 Jakk"]
	},
	"Life Stealer": {
		title: "Life Stealer",
		titleFr: "Voleur de vie",
		aliases: ["life stealer", "vol de vie", "life steal", "voleur de vie"],
		desc: "When attacking, will randomly restore HP to a friend",
		descFr: `Lors des attaques, recuperation de HP d'un allié aléatoire`,
		levels: ["-", "-", "Also restores SP"],
		grades: ["Player lvl100", "C80 Munak, Farmiliar", "C100 Hydra, Deviruchi"]
	},
	"Life Transfer": {
		title: "Life Transfer",
		titleFr: "Transfert de vie",
		aliases: ["life transfer", "transfert de vie", "life transfert", "transfert vie"],
		desc: "Restore the max HP for the weakest friend with part of your HP",
		descFr: `Restaure le max de HP pour l'allié le plus faible avec une partie de vos HP`,
		levels: ["-", "-", "Spend own HP to recover weakest allies HP, Receives Recover Effect"],
		grades: ["Player lvl60", "C80 Spore, Eclipse", "C100 Mandragora, Farmiliar"]
	},
	"Magic Burn": {
		title: "Magic Burn",
		titleFr: "Brûlure magique",
		aliases: ["magic burn", "brulure magique", "sp burn", "brûlure magique"],
		desc: "Makes the enemy burn huge amounts of SP",
		descFr: `Inflige immédiatement une grande perte de SP à l'ennemi`,
		levels: ["-", "-", "and SP loss over time"],
		grades: ["Treasure Map Only", "Treasure Map Only", "Treasure Map Only"]
	},
	Marker: {
		title: "Marker",
		titleFr: "Marqueur",
		aliases: ["marker", "marqueur"],
		desc: "All allies attack the marked enemy",
		descFr: `Tous les alliés attaquent l'ennemi marqué`,
		levels: ["-", "DMG ↑", "CRIT ↑"],
		grades: ["C50 Vitata", "C100 Whisper", "C120 Tarou"]
	},
	"Multiple Attack": {
		title: "Multiple Attack",
		titleFr: "Attaque multiple / Double attaque / Enchainement",
		aliases: ["mulitple attack", "double attaque", "attack multiple", "double attack", "attaque multiple", "enchainement", "enchaînement"],
		desc: "Hits 1 enemy multiple times",
		descFr: "Inflige des dégâts à un ennemi",
		levels: ["2 hit", "3 hit", "5 hit", "8 hit"],
		grades: ["C30 Any Green pet", "C80 Any Blue pet", "C100 Any Purple pet", "C150 Any Orange pet"]
	},
	Protection: {
		title: "Protection",
		titleFr: "Protection",
		aliases: ["protection", "protéction"],
		desc: "Decrease weakest ally DMG taken",
		descFr: `Réduit DGT normal et compétence à l'allié le plus faible`,
		levels: ["Decrease Allies DMG", "Decrease Allies DMG", "Normal DMG", "Increase Allies DMG"],
		grades: ["PvP Gold", "C80 Vadon, Thara Frog", "C100 Thief Bug, Creamy", "C150 Any Orange pet"]
	},
	"Quick Spell": {
		title: "Quick Spell",
		titleFr: "Sort Rapide",
		aliases: ["quick spell", "sort rapide", "quick cast", "quickspell", "cast rapide", "quik spell", "quick spel", "quik spel", "QS"],
		desc: "Reduces cast time for all allies",
		descFr: `Réduit le temps de cast à tous les alliés`,
		levels: ["1 skill", "1 skill", "2 skills"],
		grades: ["C30 Creamy, Bon Gun",
			"C100 Drake / C110 Deviling",
			"C100 Hydra, Yoyo"]
	},
	"Raid Away": {
		title: "Raid Away",
		titleFr: "Balayage",
		aliases: ["raid away", "balayage", "raid away", "balayer", "raid awy", "RA"],
		desc: "Hits all enemies and Stuns briefly",
		descFr: `Engendre des dégâts à tous les ennemis, les étourdis pendant un court instant`,
		levels: ["-", "-", "Quick attack"],
		grades: ["C35 Any pet", "C80 Any pet", "C100 Any pet"]
	},
	Restore: {
		title: "Restore",
		titleFr: "Restaurer",
		aliases: ["restore", "restorer", "restaurer", "restaure"],
		desc: "Heals everyone",
		descFr: `Restore les HP de tous les alliés`,
		levels: ["10% maxHP", "10% maxHP (cast plus rapide ?)", "Remove debuffs"],
		grades: ["C50 Drops", "C100 Poring", "C100 Lunatic, Eclipse"]
	},
	"Shield of Tardy": {
		title: "Shield of Tardy",
		titleFr: "Bouclier de Tardy",
		aliases: ["shield of tardy", "bouclier de tardy", "shield tardy", "tardy shield", "Tardy", "ST", "SoT"],
		desc: "Receiving Physical DMG will lower the attacker's ASPD",
		descFr: `Réduit l'ASPD de l'ennemi lorsque vous subissez des DGT physique`,
		levels: ["-", "Physical DMG taken ↓", "Physical DMG taken ↓"],
		grades: ["C30 Deviruchi, Deviling", "C100 Maya / C110 Steam Gobelin", "C120 Mistress / C130 Ghostring"]
	},
	Sleep: {
		title: "Sleep",
		titleFr: "Sommeil",
		aliases: ["sleep", "someil", "sommeil"],
		desc: "DMG & Sleep (single target)",
		descFr: `Inflige DGT et sommeil à un ennemi`,
		levels: ["-", "-", "Long duration"],
		grades: ["C50 Deviruchi", "C100 Piere", "C120 Deviling"]
	},
	"Sleep Attack": {
		title: "Sleep Attack",
		titleFr: "Attaque sommeil",
		aliases: ["sleep attack", "attaque sommeil", "sleep attak", "attaque someil", "SA"],
		desc: "Deals Dmg to all enemies and Cause Sleep",
		descFr: `Inflige DGT et sommeil à tous les ennemis`,
		levels: ["-", "-", "DMG ignore DEF, buffs & debuffs"],
		grades: ["Treasure Map Only", "Treasure Map Only", "Treasure Map Only"]
	},
	Sneer: {
		title: "Sneer",
		titleFr: "Dérision",
		aliases: ["sneer", "derision", "taunt", "dérision", "target"],
		desc: "Draw all enemies to attack yourself",
		descFr: `Incite tous les ennemis à vous attaquer`,
		levels: ["-", "DMG taken ↓", "Special effects duration ↓", "Special effects duration ↓"],
		grades: ["PvP Silver", "C80 Poring, Savage", "C100 Bigfoot, Orc Baby", "C150 Any Purple pet"]
	},
	"Soul Destroyer": {
		title: "Soul Destroyer",
		titleFr: "Destructeur d'âme",
		aliases: ["soul destroyer", "destructeur d'ame", "destructeur d'âme", "SD"],
		desc: "DMG & Stun (single target)",
		descFr: `Inflige DGT et étourdi un ennemi`,
		levels: ["-", "-", "Long duration"],
		grades: ["C50 Argiope", "C120 Fabre", "C120 Steam Gobelin"]
	},
	"Spirit Counter": {
		title: "Spirit Counter",
		titleFr: "Contre-esprit",
		aliases: ["spirit counter", "contre esprit", "contre-esprit"],
		desc: "Receiving Skill DMG will lower the attacker's Cast Speed",
		descFr: `Réduit le cast speed de l'ennemi quand vous subisez des dégâts de compétence`,
		levels: ["-", "Skill DMG taken ↓", "Skill DMG taken ↓"],
		grades: ["C30 Whisper, Ghostring", "C100 Mistress / C110 Ghostring", "C120 Maya / C130 Steam Gobelin"]
	},
	"Stone Curse": {
		title: "Stone Curse",
		titleFr: "Pierre de Malediction",
		aliases: ["stone curse", "pierre de malediction", "pierre de malédiction", "SC"],
		desc: "DMG & Stone (single target)",
		descFr: `Inflige DGT et pétrifie un ennemi`,
		levels: ["-", "-", "Long duration"],
		grades: ["C50 Thara Frog", "C100 Spore", "C120 King Gobelin"]
	},
	Strengthen: {
		title: "Strengthen",
		titleFr: "Renforcer",
		aliases: ["strengthen", "renforcer", "strenghten", "renforce", "strengten", "renforcé"],
		desc: "Increase DEF (skill user)",
		descFr: `Augmente la DEF (du lanceur de sort)`,
		levels: ["-", "-", "-", "Add max DMG taken /atk"],
		grades: ["C50 Savage", "C100 Lunatic", "C120 Ghostring", "PvP Master 4-5%"]
	},
	Swift: {
		title: "Swift",
		titleFr: "Rapidité",
		aliases: ["swift", "rapidité", "rapidite", "ASPD"],
		desc: "ASPD ↑ for all allies",
		descFr: `Augmente l'ASPD de tous les alliés`,
		levels: [],
		grades: ["C50 Orc Baby", "C100 Marc", "C150 Steam Gobelin, Rotar Zairo"]
	},
	Thump: {
		title: "Thump",
		titleFr: "Grand Coup / Attaque Lourde",
		aliases: ["thump", "grand coup", "attaque lourde"],
		desc:
		"Deals damage (single target)",
		descFr: `Inflige des dégâts à un ennemi`,
		levels: ["-", "deals more damage", "part of DEF ignored", "part of DEF buffs ignored"],
		grades: ["C2 Any pet", "C50 Any pet", "C100 Any pet", "C150 Any pet"]
	},
	Unyield: {
		title: "Unyield",
		titleFr: "Inflexible",
		aliases: ["unyield", "inflexible", "unyeld", "infléxible"],
		desc: "Free the adventurer from CC",
		descFr: `Libère l'aventurier des CC`,
		levels: ["Received DMG ↑", "-", "-", "CC effects reflected"],
		grades: ["C30 Evil Skeleton, Archer Skeleton",
			"C100 Osiris / C110 Isis",
			"C100 Goblin (Atk) O.O, Goblin (Crit) :D",
			"C150 Deniro, Jakk"]
	},
	"Weak Track": {
		title: "Weak Track",
		titleFr: "Faible piste",
		aliases: ["weak track", "faible piste", "weak trak", "weak trac", "WT"],
		desc: "Curses the enemy, If certain amount of attacks = stun",
		descFr: `Maudit l'ennemi, s'il subit un certain nombre d'attaque dans le temps impart, il est étourdii`,
		levels: ["(single target)",
			"(single target) longer stun",
			"(single target) + extra DMG",
			"(All of them)"],
		grades: ["C30 Any Blue pet",
			"C80 Thief Bug, Rocker",
			"C100 Fabre, Eclipse",
			"C150 Smokie, Drainliar"]
		},
};
