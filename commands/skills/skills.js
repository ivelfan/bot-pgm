module.exports = {
  honor: {
    stun: {
      linksTo: ['knight.fatalBlow', 'archer.powerArrow', 'mage.magicalShock'],
    },
    double: {
      linksTo: ['knight.doubleAttack', 'archer.doubleStrafe', 'mage.magicalDoubleHit'],
    },
    frost: {
      linksTo: ['knight.frostBlade', 'archer.frostBolt', 'mage.stoneCurse'],
    },
    sleep: {
      linksTo: ['knight.sleepingBlade', 'archer.sleepBolt', 'mage.sleep'],
    },
    silence: {
      linksTo: ['knight.bladeOfSilence', 'archer.silentBolt', 'mage.silence'],
    },
    hit: {
      linksTo: ['knight.spearDynamo', 'archer.mitation', 'mage.elementFocus'],
    },
    dexterity: {
      linksTo: ['knight.dexterity', 'archer.windWalker', 'mage.dexterity'],
    },
    triple: {
      linksTo: ['knight.tripleAction', 'archer.tripleStrafe', 'mage.mentalPower'],
    },
    curse: {
      linksTo: ['knight.cursedBlade', 'archer.curseBolt', 'mage.curseMagic'],
    },
    fury: {
      linksTo: ['knight.furiousBlow', 'archer.furyArrow', 'mage.energyReflection'],
    },
    h32: {
      linksTo: ['knight.chargedAttack', 'archer.aimedBolt', 'mage.elementBomb'],
    },
    bleed: {
      linksTo: ['knight.vitalStrike', 'archer.falconEyes', 'mage.thunderousShot'],
    },
    h36: {
      linksTo: ['knight.pierce', 'archer.ghostArrow', 'mage.fireWall'],
    },
    h39: {
      linksTo: ['knight.traumaticBlow', 'archer.vulnerabilityMark', 'mage.magicalChase'],
    },
    lifesteal: {
      linksTo: ['knight.bladeOfBlood', 'archer.bloodSteal', 'mage.energyTransfer'],
    },
    bash: {
      linksTo: ['knight.bash', 'archer.brutalArrow', 'mage.mindblow'],
    },
  },
  shared: {
    berzerk: {
      title: 'Berserk',
      titleFr: 'Fou Furieux',
      thumbnail: 'Berserk.png',
      aliases: ['Berzerk', 'Berserk', 'Fou Furieux', 'H02', 'H10'],
      desc: 'Next Attack will crit and increase control free and crit.',
      descFr: 'La prochaine ATQ est Crit, contrôle libre et DGT crit augmentés, durée longue',
      grades: ['H02 - 200', 'H10 - 6000'],
    },

    provoke: {
      title: 'Provoke',
      titleFr: 'Provoquer',
      thumbnail: 'Provoke.png',
      aliases: ['Provoke', 'Provoke', 'Provoquer', 'H05', 'H19'],
      desc: 'Lowers the enemy\'s DEF and M.DEF significantly.',
      descFr: 'Réduit la def et def mag. de l\'ennemi de manière significative',
      grades: ['H05 - 1500', 'H19 - 32700'],
    },

    counterAttack: {
      title: 'Counter Attack',
      titleFr: 'Contre-Attaque',
      thumbnail: 'Counter_Attack.png',
      aliases: ['Counter Attack', 'Counter Attack', 'Contre-Attaque', 'H08', 'H22'],
      desc: 'Bounce the received Dmg, Long period. ',
      descFr: 'Renvoie les degats subis',
      grades: ['H08 - 4000', 'H22 - 46800'],
    },

    cure: {
      title: 'Cure',
      titleFr: 'Soin',
      thumbnail: 'Cure.png',
      aliases: ['Cure', 'Cure', 'Soin', 'H09', 'H24'],
      desc: 'Restore your lost HP. And it continues for a period. ',
      descFr: 'Restaure vos vies perdues',
      grades: ['H09 - 5000', 'H24 - 58100'],
    },

    awaken: {
      title: 'Awaken',
      titleFr: 'Eveiller',
      thumbnail: 'Awaken.png',
      aliases: ['Awaken', 'Awaken', 'Eveiller', 'H17', 'H33'],
      desc: 'Restores your lost SP.',
      descFr: 'Restore vos SP perdu',
      grades: ['H17 - 24900', 'H33 - 121800'],
    },

    speed: {
      title: 'Speed Burst',
      titleFr: 'Vitesse Limite',
      thumbnail: 'Speed_Burst.png',
      desc: 'Greatly increases Atk Spd, Long Duration.',
      descFr: 'Augmente considérablement la Vitesse d\'Attaque, Durée longue',
      grades: ['H20 - 37000', 'H38 - 161000'],
    },

    agiReduction: {
      title: 'AGI Reduction',
      titleFr: 'Diminuer AGI',
      thumbnail: 'AGI_Reduction.png',
      aliases: ['AGI Reduction', 'AGI Reduction', 'Diminuer AGI', 'H25', 'H43'],
      desc: 'Lowers enemy attack speed.',
      descFr: 'Réduit la vitesse d\'attaque de l\'ennemi pendant une période',
      grades: ['H25 - 64300', 'H43 - 224800'],
    },

    targetChange: {
      title: 'Target Change',
      titleFr: 'Transfert d\'objet',
      thumbnail: 'Target_Change.png',
      aliases: ['Target Change', 'Target Change', 'Transfert d\'objet', 'H29', 'H37'],
      desc: 'Forces enemies to attack you in teamfights.',
      descFr: 'Pousse tous les ennemis à vous attaquer mais dure pendant une courte période ',
      grades: ['H29 - 90000', 'H37 - 150000'],
    },

    concentration: {
      title: 'Concentration',
      titleFr: 'Concentration',
      thumbnail: 'Concentration.png',
      aliases: ['Concentration', 'Concentration', 'Concentration', 'H30', 'H45'],
      desc: 'Reduces duration of debuffs on you.',
      descFr: 'Durée des altérations d\'état nég. en baisse',
      grades: ['H30 - 93100', 'H45 - 254200'],
    },

    distraction: {
      title: 'Distraction',
      titleFr: 'Distraction',
      thumbnail: 'Distraction.png',
      aliases: ['Distraction', 'Distraction', 'Distraction', 'H42', 'H48'],
      desc: 'Lowers enemy Cast and raises their SP consumption.',
      descFr: 'Baisse la vitesse d\'invocation et augmente la consommation de SP de l\'ennemi sur une durée longue',
      grades: ['H42 - 210900', 'H48 - 302800'],
    },

    clearance: {
      title: 'Clearance',
      titleFr: 'Dégagement',
      thumbnail: 'Clearance.png',
      aliases: ['Clearance', 'Clearance', 'Dégagement', 'H44', 'H52'],
      desc: 'Removes enemy buffs, restores your HP if successful, and makes enemies take more damage.',
      descFr: 'Affaiblis les ennemis, Retire les altérations d\'états pos., Restitue des HP en cas de succès',
      grades: ['H44 - 239200', 'H52 - 376500'],
    },

    hiddenPotential: {
      title: 'Hidden Potential',
      titleFr: 'Activation de potentiel',
      thumbnail: 'Hidden_Potential.png',
      aliases: ['Hidden Potential', 'Hidden Potential', 'Activation de potentiel', 'H53', 'H61'],
      desc: 'The longer the duration of the fighter, higher is the dmg dealt',
      descFr: 'Attaque l\'ennemi. Plus le combat est long, plus les DGT augmentent.',
      grades: ['H53 - 393300', 'H61 - '],
    },

    fullThrottle: {
      title: 'Full Throttle',
      titleFr: 'Pleins gaz',
      thumbnail: 'Full_Throttle.png',
      aliases: ['Full Throttle', 'Full Throttle', 'Pleins gaz'],
      desc: 'Deals damage and Enhance Stats + class bonus',
      descFr: 'Inflige des dégâts, Augmente tous les attributs + bonus de classe',
      grades: ['-'],
    },
    powerImpact: {
      title: 'Power Impact',
      titleFr: 'Impact continu',
      thumbnail: 'Power_Impact.png',
      aliases: ['Power Impact', 'Power Impact', 'Impact continu', 'H54', 'H57'],
      desc: 'Attacks more times, based on the enemy\'s HP',
      descFr: 'Attaque l\'ennemi. Plus les HP de l\'ennemi sont éléves, plus les attaques sont nombreuses.',
      grades: ['H54 - 400000', 'H57 - '],
    },

    powerShield: {
      title: 'Power Shield',
      titleFr: 'Amortisseur de dégâts',
      thumbnail: 'Power_Shield.png',
      aliases: ['Power Shield', 'Power Shield', 'Amortisseur de dégâts', 'H55', 'H59'],
      desc: '""Delay the dmg taken to affect you""',
      descFr: 'Les DGT subis durant un certain temps prennet effet plus tard.',
      grades: ['H55 - 413300', 'H59 - 478900'],
    },

    mislead: {
      title: 'Mislead',
      titleFr: 'Fourvoiement',
      thumbnail: 'Mislead.png',
      aliases: ['Mislead', 'Mislead', 'Fourvoiement', 'H56', 'H63'],
      desc: 'Mislead the Opponent, Causing his skills to affect himself too',
      descFr: 'Fourvoie l\'ennemi. Sa prochaine compétence aura un effet sur lui-même.',
      grades: ['H56 - 432300', 'H63 - '],
    },

    battleChains: {
      title: 'Battle Chains',
      titleFr: 'Chaînes de combat',
      thumbnail: 'Battle_Chains.png',
      aliases: ['Battle Chains', 'Battle Chains', 'Chaînes de combat', 'H58', 'H64'],
      desc: 'Increases ATK and DEF based on the Combat Pet Attributes',
      descFr: 'ATQ/DEF ↑ obtenu depuis les attributs de l\'animal de combat.',
      grades: ['H58 - ', 'H64 - '],
    },

    intimidation: {
      title: 'Intimidation',
      titleFr: 'Intimidation',
      thumbnail: 'Intimidation.png',
      aliases: ['Intimidation', 'Intimidation', 'Intimidation', 'H60', 'H62'],
      desc: 'Critical attacks weaken the enemy, becomes stronger every 5 crits.',
      descFr: 'Les Crit réduisent les DGT de l\'ennemi, effet renforcé tous les 5 Crit.',
      grades: ['H60 - ', 'H62 - '],
    },
  },
  knight: {
    fatalBlow: {
      title: 'Fatal Blow',
      titleFr: 'Coup Fatal',
      thumbnail: 'Fatal_Blow.png',
      desc: 'Deal damage and stun the enemy, CRI rate increases when the enemy is stunned.',
      descFr: 'Inflige des dégâts et étourdit l\'ennemi. Taux de Crit++ lorsque l\'ennemi est assomé.',
      grades: ['H01 - 0', 'H07 - 3000'],
    },

    doubleAttack: {
      title: 'Double Attack',
      titleFr: 'Double Attaque',
      thumbnail: 'Double_Attack.png',
      desc: 'Deals damage twice.',
      descFr: 'Inflige deux fois des DGT',
      grades: ['H03 - 500', 'H14 - 12900'],
    },

    frostBlade: {
      title: 'Frost Blade',
      titleFr: 'Lame de givre',
      thumbnail: 'Frost_Blade.png',
      desc: 'Freeze/Stone. Lowers corresponding defence (physical/magic) and raises the opposite defence.',
      descFr: 'LV2 Warrior : Inflide dégâts et gèle l\'ennemi, réduit Def phys, mais augmente Def Mag',
      grades: ['H04 - 1000', 'H16 - 21500'],
    },

    sleepingBlade: {
      title: 'Sleeping Blade',
      titleFr: 'Lame de sommeil',
      thumbnail: 'Sleeping_Blade.png',
      desc: 'Fast cast, Deals Dmg, Sleep. More Dmg when the enemy is sleeping.',
      descFr: 'Inflige des dégâts à l\'ennemi et l\'endort. L\'ennemi recevra plus de dégâts quand il dort.',
      grades: ['H06 - 2000', 'H21 - 41800'],
    },

    bladeOfSilence: {
      title: 'Blade of Silence',
      titleFr: 'Lame de silence',
      thumbnail: 'Blade_of_Silence.png',
      desc: 'Long duration silence but sometimes fails.',
      descFr: 'Inflige des dégâts a l\'ennemi et le réduit au silence.',
      grades: ['H11 - 8500', 'H26 - 70900'],
    },

    spearDynamo: {
      title: 'Spear Dynamo',
      titleFr: 'Lance dynamo',
      thumbnail: 'Spear_Dynamo.png',
      desc: 'Improve HIT greatly and it lasts for a long period. ',
      descFr: 'Améliore grandemt FRAPPE et dure pdt une longue période.',
      grades: ['H12 - 10600', 'H27 - 77900'],
    },

    dexterity: {
      title: 'Dexterity',
      titleFr: 'Dextérité',
      thumbnail: 'Dexterity.png',
      desc: 'Increases EVA. ',
      descFr: 'Augmente EVIT',
      grades: ['H14 - 15500', 'H28 - 85300'],
    },

    tripleAction: {
      title: 'Triple Action',
      titleFr: 'Triple Action',
      thumbnail: 'Triple_Action.png',
      desc: 'Improve HIT greatly. And it lasts for a long period. ',
      descFr: '',
      grades: ['H15 - 18300', 'H31 - 101400'],
    },

    cursedBlade: {
      title: 'Cursed Blade',
      titleFr: 'Lame de malédiction',
      thumbnail: 'Cursed_Blade.png',
      desc: 'Deals some Dmg, Curse the enemy, Lower enemy\'s HIT and EVA.',
      descFr: 'Inflige des degats et maudit l\'ennemi. Reduit la FRAPPE et EVIT de l\'ennemi.',
      grades: ['H18 - 28600', 'H35 - 139200'],
    },

    furiousBlow: {
      title: 'Furious Blow',
      titleFr: 'Coup féroce',
      thumbnail: 'Furious_Blow.png',
      desc: 'Deals Dmg, Dmg suffered during cast will increase them, Recovers part of HP lost.',
      descFr: 'Inflige des dégâts et maudit l\'ennemi. Reduit FRAPPE et EVIT de l\'ennemi',
      grades: ['H23 - 52300', 'H41 - 197600'],
    },

    chargedAttack: {
      title: 'Charged Attack',
      titleFr: 'Assaut',
      thumbnail: 'Charged_Attack.png',
      desc: 'High damage attack, also heals you.',
      descFr: 'Inflige de très grand dégats après la charge, HIT augmenté',
      grades: ['H32 - 110200', 'H46 - 269800'],
    },

    vitalStrike: {
      title: 'Vital Strike',
      titleFr: 'Attaque ingénieuse',
      thumbnail: 'Vital_Strike.png',
      desc: 'Deals bonus damage to enemies with a debuff on them.',
      descFr: 'Inflige des dégats a tous les ennemis. Si ils sont sous altération d\'état, les dégats sont plus grand, et saignement est infligé.',
      grades: ['H34 - 129000', 'H47 - 286000'],
    },

    pierce: {
      title: 'Pierce',
      titleFr: 'Attaque perçante',
      thumbnail: 'Pierce.png',
      desc: 'Deals 3x Incremental Dmg, the 2nd and 3rd hit will not trigger effects.',
      descFr: 'inflige trois fois des dégats incrémentaux',
      grades: ['H36 - 149900', 'H49 - 320300'],
    },

    traumaticBlow: {
      title: 'Traumatic Blow',
      titleFr: 'Coup Traumatique',
      thumbnail: 'Traumatic_Blow.png',
      desc: 'Crit will increase following dmg, Long Duration, will not stack. ',
      descFr: 'Les crit augmente grandement les dégats ultérieurs, durée longue, non cummulable',
      grades: ['H39 - 172700', 'H50 - 338400'],
    },

    bladeOfBlood: {
      title: 'Blade of Blood',
      titleFr: 'Lame de sang',
      thumbnail: 'Blade_of_Blood.png',
      desc: 'Causes attacks to steal health, also increases crit damage.',
      descFr: 'Dégats augmenté, et vol de HP, durée moyenne',
      grades: ['H40 - 184900', 'H51 - 357100'],
    },

    bash: {
      title: 'Bash',
      titleFr: 'Attaque sauvage',
      thumbnail: 'Bash.png',
      desc: 'High damage attack.',
      descFr: 'Inflige de lourds dégâts',
      grades: ['-'],
    },

    endure: {
      title: 'Endure',
      titleFr: 'Endure',
      thumbnail: 'Endure.png',
      desc: 'Reduce received damage and last for a long period.',
      descFr: 'Réduit dégâts subis et dure pdt une longue période.',
      grades: ['-'],
    },

    windCutter: {
      title: 'Wind Cutter',
      titleFr: 'Lame venteuse',
      thumbnail: 'Wind_Cutter.png',
      desc: 'Deals damage and increases enemy SP consumption?',
      descFr: 'Inflige DGT et peur aux ennemis. Affaiblis les ennemis et augmente leur consommation de SP.',
      grades: ['-'],
    },
  },
  archer: {
    powerArrow: {
      title: 'Power Arrow',
      titleFr: 'Assaut de flèche',
      thumbnail: 'Power_Arrow.png',
      desc: 'Deal damage and stun the enemy, CRI rate increases when the enemy is stunned.',
      descFr: 'Inflige des dégâts et étourdit l\'ennemi. Taux de Crit++ lorsque l\'ennemi est assomé.',
      grades: ['H01 - 0', 'H07 - 3000'],
    },

    doubleStrafe: {
      title: 'Double Strafe',
      titleFr: 'Double Mitrailler',
      thumbnail: 'Double_Strafe.png',
      desc: 'Deals damage twice.',
      descFr: 'Inflige deux fois des DGT',
      grades: ['H03 - 500', 'H14 - 12900'],
    },

    frostBolt: {
      title: 'Frost Bolt',
      titleFr: 'Eclair de givre',
      thumbnail: 'Frost_Bolt.png',
      desc: 'Freeze/Stone. Lowers corresponding defence (physical/magic) and raises the opposite defence.',
      descFr: 'LV2 Warrior : Inflide dégâts et gèle l\'ennemi, réduit Def phys, mais augmente Def Mag',
      grades: ['H04 - 1000', 'H16 - 21500'],
    },

    sleepBolt: {
      title: 'Sleep Bolt',
      titleFr: 'Eclair sommeil',
      thumbnail: 'Sleep_Bolt.png',
      desc: 'Fast cast, Deals Dmg, Sleep. More Dmg when the enemy is sleeping.',
      descFr: 'Inflige des dégâts à l\'ennemi et l\'endort. L\'ennemi recevra plus de dégâts quand il dort.',
      grades: ['H06 - 2000', 'H21 - 41800'],
    },

    silentBolt: {
      title: 'Silent Bolt',
      titleFr: 'Eclair silencieux',
      thumbnail: 'Silent_Bolt.png',
      desc: 'Long duration silence but sometimes fails.',
      descFr: 'Inflige des dégâts a l\'ennemi et le réduit au silence.',
      grades: ['H11 - 8500', 'H26 - 70900'],
    },

    mitation: {
      title: 'Mitation',
      titleFr: 'Mitation',
      thumbnail: 'Spear_Dynamo.png',
      desc: 'Improve HIT greatly and it lasts for a long period. ',
      descFr: 'Améliore grandemt FRAPPE et dure pdt une longue période.',
      grades: ['H12 - 10600', 'H27 - 77900'],
    },

    windWalker: {
      title: 'Windwalker',
      titleFr: 'Marcheur de vent',
      thumbnail: 'Dexterity.png',
      desc: 'Increases EVA. ',
      descFr: 'Augmente EVIT',
      grades: ['H14 - 15500', 'H28 - 85300'],
    },

    tripleStrafe: {
      title: 'Triple Strafe',
      titleFr: 'Triple Tir',
      thumbnail: 'Triple_Strafe.png',
      desc: 'Improve HIT greatly. And it lasts for a long period. ',
      descFr: '',
      grades: ['H15 - 18300', 'H31 - 101400'],
    },

    curseBolt: {
      title: 'Curse Bolt',
      titleFr: 'Eclair de malédiction',
      thumbnail: 'Curse_Bolt.png',
      desc: 'Deals some Dmg, Curse the enemy, Lower enemy\'s HIT and EVA.',
      descFr: 'Inflige des degats et maudit l\'ennemi. Reduit la FRAPPE et EVIT de l\'ennemi.',
      grades: ['H18 - 28600', 'H35 - 139200'],
    },

    furyArrow: {
      title: 'Fury Arrow',
      titleFr: 'Flèche de Furie',
      thumbnail: 'Fury_Arrow.png',
      desc: 'Deals Dmg, Dmg suffered during cast will increase them, Recovers part of HP lost.',
      descFr: 'Inflige des dégâts et maudit l\'ennemi. Reduit FRAPPE et EVIT de l\'ennemi',
      grades: ['H23 - 52300', 'H41 - 197600'],
    },

    aimedBolt: {
      title: 'Aimed Bolt',
      titleFr: 'Tir ciblé',
      thumbnail: 'Aimed_Bolt.png',
      desc: 'High damage attack, also heals you.',
      descFr: 'Inflige de très grand dégats après la charge, HIT augmenté',
      grades: ['H32 - 110200', 'H46 - 269800'],
    },

    falconEyes: {
      title: 'Falcon Eyes',
      titleFr: 'Sniper',
      thumbnail: 'Falcon_Eyes.png',
      desc: 'Deals bonus damage to enemies with a debuff on them.',
      descFr: 'Inflige des dégats a tous les ennemis. Si ils sont sous altération d\'état, les dégats sont plus grand, et saignement est infligé.',
      grades: ['H34 - 129000', 'H47 - 286000'],
    },

    ghostArrow: {
      title: 'Ghost Arrow',
      titleFr: 'Flèche Magique',
      thumbnail: 'Ghost_Arrow.png',
      desc: 'Deals 3x Incremental Dmg, the 2nd and 3rd hit will not trigger effects.',
      descFr: 'inflige trois fois des dégats incrémentaux',
      grades: ['H36 - 149900', 'H49 - 320300'],
    },

    vulnerabilityMark: {
      title: 'Vulnerability Mark',
      titleFr: 'Opportuniste',
      thumbnail: 'Vulnerability_Mark.png',
      desc: 'Crit will increase following dmg, Long Duration, will not stack. ',
      descFr: 'Les crit augmente grandement les dégats ultérieurs, durée longue, non cummulable',
      grades: ['H39 - 172700', 'H50 - 338400'],
    },

    bloodSteal: {
      title: 'Blood Steal',
      titleFr: 'Vampire',
      thumbnail: 'Blood_Steal.png',
      desc: 'Causes attacks to steal health, also increases crit damage.',
      descFr: 'Dégats augmenté, et vol de HP, durée moyenne',
      grades: ['H40 - 184900', 'H51 - 357100'],
    },

    brutalArrow: {
      title: 'Brutal Arrow',
      titleFr: 'Flèche Brutale',
      thumbnail: 'Mindblow.png',
      desc: 'High damage attack.',
      descFr: 'Inflige de lourds dégâts',
      grades: ['-'],
    },

    guardian: {
      title: 'Guardian',
      titleFr: 'Gardien',
      thumbnail: 'Guardian.png',
      desc: 'Raises accuracy and evasion.',
      descFr: 'Augmente grandement Frappe et Evit',
      grades: ['-'],
    },

    toxicArrow: {
      title: 'Toxic Arrow',
      titleFr: 'Flèche Toxique',
      thumbnail: 'Toxic_Arrow.png',
      desc: 'Deals damage, reduces enemy healing, and deals 8% enemy max HP in damage',
      descFr: 'Inflige des dégats et empoisone les ennemis',
      grades: ['-'],
    },
  },
  mage: {
    magicalShock: {
      title: 'Magical Shock',
      titleFr: 'Choc Magique',
      thumbnail: 'Magical_Shock.png',
      desc: 'Deal damage and stun the enemy, CRI rate increases when the enemy is stunned.',
      descFr: 'Inflige des dégâts et étourdit l\'ennemi. Taux de Crit++ lorsque l\'ennemi est assomé.',
      grades: ['H01 - 0', 'H07 - 3000'],
    },

    magicalDoubleHit: {
      title: 'Magical Double Hit',
      titleFr: 'Frappe Magic Double',
      thumbnail: 'Magical_Double_Hit.png',
      desc: 'Deals damage twice.',
      descFr: 'Inflige deux fois des DGT',
      grades: ['H03 - 500', 'H14 - 12900'],
    },

    stoneCurse: {
      title: 'Stone Curse',
      titleFr: 'Pierre de Malédicon',
      thumbnail: 'Stone_Curse.png',
      desc: 'Freeze/Stone. Lowers corresponding defence (physical/magic) and raises the opposite defence.',
      descFr: 'LV2 Warrior : Inflide dégâts et gèle l\'ennemi, réduit Def phys, mais augmente Def Mag',
      grades: ['H04 - 1000', 'H16 - 21500'],
    },

    sleep: {
      title: 'Sleep',
      titleFr: 'Sommeil',
      thumbnail: 'Sleep.png',
      desc: 'Fast cast, Deals Dmg, Sleep. More Dmg when the enemy is sleeping.',
      descFr: 'Inflige des dégâts à l\'ennemi et l\'endort. L\'ennemi recevra plus de dégâts quand il dort.',
      grades: ['H06 - 2000', 'H21 - 41800'],
    },

    silence: {
      title: 'Silence',
      titleFr: 'Silence',
      thumbnail: 'Silence.png',
      desc: 'Long duration silence but sometimes fails.',
      descFr: 'Inflige des dégâts a l\'ennemi et le réduit au silence.',
      grades: ['H11 - 8500', 'H26 - 70900'],
    },

    elementFocus: {
      title: 'Element Focus',
      titleFr: 'Elément Cible',
      thumbnail: 'Element_Focus.png',
      desc: 'Improve HIT greatly and it lasts for a long period. ',
      descFr: 'Améliore grandemt FRAPPE et dure pdt une longue période.',
      grades: ['H12 - 10600', 'H27 - 77900'],
    },

    dexterity: {
      title: 'Dexterity',
      titleFr: 'Dextérité',
      thumbnail: 'Dexterity.png',
      desc: 'Increases EVA. ',
      descFr: 'Augmente EVIT',
      grades: ['H14 - 15500', 'H28 - 85300'],
    },

    mentalPower: {
      title: 'Mental Power',
      titleFr: 'Pouvoir Mental',
      thumbnail: 'Mental_Power.png',
      desc: 'Improve HIT greatly. And it lasts for a long period. ',
      descFr: '',
      grades: ['H15 - 18300', 'H31 - 101400'],
    },

    curseMagic: {
      title: 'Curse Magic',
      titleFr: 'Malédiion magique',
      thumbnail: 'Curse_Magic.png',
      desc: 'Deals some Dmg, Curse the enemy, Lower enemy\'s HIT and EVA.',
      descFr: 'Inflige des degats et maudit l\'ennemi. Reduit la FRAPPE et EVIT de l\'ennemi.',
      grades: ['H18 - 28600', 'H35 - 139200'],
    },

    energyReflection: {
      title: 'Energy Reflection',
      titleFr: 'Réflexion énergétique',
      thumbnail: 'Energy_Reflection.png',
      desc: 'Deals Dmg, Dmg suffered during cast will increase them, Recovers part of HP lost.',
      descFr: 'Inflige des dégâts et maudit l\'ennemi. Reduit FRAPPE et EVIT de l\'ennemi',
      grades: ['H23 - 52300', 'H41 - 197600'],
    },

    elementBomb: {
      title: 'Element Bomb',
      titleFr: 'Element Bombe',
      thumbnail: 'Element_Bomb.png',
      desc: 'High damage attack, also heals you.',
      descFr: 'Inflige de très grand dégats après la charge, HIT augmenté',
      grades: ['H32 - 110200', 'H46 - 269800'],
    },

    thunderousShot: {
      title: 'Thunderous Shot',
      titleFr: 'Tir tonitruant',
      thumbnail: 'Thunderous_Shot.png',
      desc: 'Deals bonus damage to enemies with a debuff on them.',
      descFr: 'Inflige des dégats a tous les ennemis. Si ils sont sous altération d\'état, les dégats sont plus grand, et saignement est infligé.',
      grades: ['H34 - 129000', 'H47 - 286000'],
    },

    fireWall: {
      title: 'Fire Wall',
      titleFr: 'Mur de Feu',
      thumbnail: 'Fire_Wall.png',
      desc: 'Deals 3x Incremental Dmg, the 2nd and 3rd hit will not trigger effects.',
      descFr: 'inflige trois fois des dégats incrémentaux',
      grades: ['H36 - 149900', 'H49 - 320300'],
    },

    magicalChase: {
      title: 'Magical Chase',
      titleFr: 'Chasse Magique',
      thumbnail: 'Magical_Chase.png',
      desc: 'Crit will increase following dmg, Long Duration, will not stack. ',
      descFr: 'Les crit augmente grandement les dégats ultérieurs, durée longue, non cummulable',
      grades: ['H39 - 172700', 'H50 - 338400'],
    },

    energyTransfer: {
      title: 'Energy Transfer',
      titleFr: 'Transfert énergétique',
      thumbnail: 'Energy_Transfer.png',
      desc: 'Causes attacks to steal health, also increases crit damage.',
      descFr: 'Dégats augmenté, et vol de HP, durée moyenne',
      grades: ['H40 - 184900', 'H51 - 357100'],
    },

    mindblow: {
      title: 'Mindblow',
      titleFr: 'Hallucinion',
      thumbnail: 'Mindblow.png',
      desc: 'High damage attack.',
      descFr: 'Inflige de lourds dégâts',
      grades: ['-'],
    },

    energyCoat: {
      title: 'Energy Coat',
      titleFr: 'Manteau énergétie',
      thumbnail: 'Energy_Coat.png',
      desc: 'Consume SP to reduce received Dmg. ',
      descFr: 'Consomme des SP pour réduire les dégats recus.',
      grades: ['-'],
    },

    jackFrost: {
      title: 'Jack Frost',
      titleFr: 'Jack Frost',
      thumbnail: 'Jack_Frost.png',
      desc: 'Deals Dmg, Reduces enemy\'s Atk Speed and Cast.',
      descFr: 'Inflige des dégâts, réduit la vitesse d\'attaque et le Cast de l\'ennemi.',
      grades: ['-'],
    },
  },
};
