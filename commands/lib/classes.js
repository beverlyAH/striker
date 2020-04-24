const classes = {
  statistics: {
    'Body': 'fighting, acrobatics, endurance',
    'Mind': 'skills, training, sorcery',
    'Spirit': 'interaction, perception, prayer'
  },
  soldier: {
    1: {
      name: 'Gunslinger',
      stats: [3, 2, 1],
      special: 'Squad (command an elite fireteam)'
    },
    2: {
      name: 'Commander',
      stats: [2, 1, 3],
      special: 'Squad (command an elite fireteam)'
    },
    3: {
      name: 'Bounty Hunter',
      stats: [2, 3, 1],
      special: 'Survival (can always scavenge food/drink, first aid, and primitive melee weapon)'
    },
    4: {
      name: 'Sniper',
      stats: [3, 1, 2],
      special: 'Assassin (kill someone without leaving a trace)'
    },
    5: {
      name: 'Space Marine',
      stats: [3, 2, 1],
      special: 'Heavy (carry heavy gear with ease and ignore high gravity)'
    },
    6: {
      name: 'Ace Pilot',
      stats: [2, 3, 1],
      special: 'Weightless (act freely in low/no gravity)'
    }
  },
  technician: {
    1: {
      name: 'Hacker',
      stats: [2, 3, 1],
      special: 'Hardwired (able to remotely track and Help up to a dozen allies)'
    },
    2: {
      name: 'Cyborg',
      stats: [2, 3, 1],
      special: 'Enhanced (body augmented by cybernetic implants)'
    },
    3: {
      name: 'Engineer',
      stats: [2, 3, 1],
      special: 'Upgraded (add temporary upgrades to weapons and vehicles)'
    },
    4: {
      name: 'Scoundrel',
      stats: [1, 2, 3],
      special: 'Fame (known throughout the galaxy, allies can drop your name to Help social interactions)'
    },
    5: {
      name: 'Infiltrator',
      stats: [3, 2, 1],
      special: 'Criminal (when you commit a theft, break-in, or other crime, you leave no evidence behind)'
    },
    6: {
      name: 'Medic',
      stats: [1, 3, 2],
      special: 'Healer (heal 2 Strikes when using a medpac instead of 1)'
    }
  },
  warlock: {
    1: {
      name: 'Ward',
      stats: [2, 1, 3],
      special: '(Spirit) - create light, used focused light for melee or ranged attacks, heal yourself or others, call upon your space deity for help and guidance'
    },
    2: {
      name: 'Way',
      stats: [1, 2, 3],
      special: '(Spirit) - inspire others, sense and control emotions, transmute materials'
    },
    3: {
      name: 'Will',
      stats: [1, 3, 2],
      special: '(Mind) - communicate telepathically, com- mand others with your mind, read other people\'s thoughts 4. Wrath (2,3,1) (Mind) - create and control the elements (fire, frost, wind, and lightning)'
    },
    4: {
      name: 'Wrath',
      stats: [2, 3, 1],
      special: '(Mind) - create and control the elements (fire, frost, wind, and lightning)'
    },
    5: {
      name: 'Warp',
      stats: [2, 3, 1],
      special: '(Mind) - bend space and time, teleport, view distant places or the past and the future'
    },
    6: {
      name: 'Woe',
      stats: [3, 1, 2],
      special: '(Spirit) - imbue weapons and armor with mag- ical energy, create telekinetic barriers and effects'
    }
  }
}

module.exports = classes