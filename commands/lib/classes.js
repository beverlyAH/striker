const warlockEquipment = ['Humble Robes', 'Agile Hoverbike', 'Medium Armor (+2 Strike)']

module.exports = {
  'Gunslinger': {
    type: 'Soldier',
    stats: [3, 2, 1],
    special: ['Deadshot', 'Perform trick shots, ranged attacks ignore Armor.'],
    startingEquipment: ['Duster Jacket', 'Frag Grenade', 'Laser Pistol', 'Light Armor (+1 Strike)']
  },
  Commander: {
    type: 'Soldier',
    stats: [2, 1, 3],
    special: ['Squad', 'Command an elite fireteam.'],
    startingEquipment: ['Military Uniform', 'Frag Grenade', 'Repeating Laser Rifle', 'Medium Armor (+2 Strike)']
  },
  'Bounty Hunter': {
    type: 'Soldier',
    stats: [2, 3, 1],
    special: ['Survival', 'Can always scavenge food/drink, first aid, and primitive melee weapons.'],
    startingEquipment: ['Rugged clothes', 'Wilderness Kit', 'Plasma Carbine', 'Light Armor (+1 Strike)']
  },
  Sniper: {
    type: 'Soldier',
    stats: [3, 1, 2],
    special: ['Assassin', 'Kill someone without leaving a trace.'],
    startingEquipment: ['Military Uniform', 'Laser Sniper Rifle (silenced)', 'Electrobinoculars', 'Light Armor (+1 Strike)']
  },
  'Space Marine': {
    type: 'Soldier',
    stats: [3, 2, 1],
    special: ['Heavy', 'Carry heavy gear with ease and ignore high gravity.'],
    startingEquipment: ['Leather Battle Suit', 'Plasma Cannon', 'Heavy Armor (+3 Strike)']
  },
  'Ace Pilot': {
    type: 'Soldier',
    stats: [2, 3, 1],
    special: ['Weightless', 'Act freely in low, or no gravity.'],
    startingEquipment: ['Pilot Jumpsuit', 'Repair Kit', 'Light Armor (+1 Strike)', 'Agile Starfighter (energy cannons & light armor)']
  },
  'Hacker': {
    type: 'Technician',
    stats: [2, 3, 1],
    special: ['Hardwired', 'Able to remotely track and Help up to a dozen allies.'],
    startingEquipment: ['Dark Clothing', 'Cyberjack Dataport (Cyberdeck implant)', 'Cloaked Hover Bike']
  },
  Cyborg: {
    type: 'Technician',
    stats: [2, 3, 1],
    special: ['Enhanced', 'Body augmented by cybernetic implants.'],
    startingEquipment: ['Leather Biker Clothes', 'Light Armor (+1 Strike)', 'Cyber-Arm Cannon', 'Cyber-Tool Hands', 'Cyber-Eye', 'Agile Street Bike']
  },
  Engineer: {
    type: 'Technician',
    stats: [2, 3, 1],
    special: ['Upgraded', 'Add temporary upgrades to weapons and vehicles.'],
    startingEquipment: ['Work Coveralls', 'Screamer Pistol', 'Repair Kit', 'Light Armor (+1 Strike)']
  },
  Scoundrel: {
    type: 'Technician',
    stats: [1, 2, 3],
    special: ['Fame', 'Known throughout the galaxy, allies can drop your name to Help social interactions.'],
    startingEquipment: ['Galactic Couture', 'Infiltration Kit', 'Luxury Groundcar', 'Concealed Laser Pistol']
  },
  Infiltrator: {
    type: 'Technician',
    stats: [3, 2, 1],
    special: ['Criminal', 'When you commit a theft, break-in, or other crime, you leave no evidence behind.'],
    startingEquipment: ['Black Jumpsuit', 'Infiltration Kit', 'Stun Baton', 'Concealed Slugthrower Pistol (silenced)']
  },
  Medic: {
    type: 'Technician',
    stats: [1, 3, 2],
    special: ['Healer', 'Heal 2 Strikes when using a medpac instead of 1.'],
    startingEquipment: ['EMT Uniform', 'Medical Kit', 'Laser Pistol', 'Ambulance', '1 Medpac']
  },
  'Ward Warlock': {
    type: 'Warlock',
    stats: [2, 1, 3],
    special: ['Ward Magic', 'Create light, used focused light for melee or ranged attacks, heal yourself or others, call upon your space deity for help and guidance.'],
    startingEquipment: warlockEquipment
  },
  'Way Warlock': {
    type: 'Warlock',
    stats: [1, 2, 3],
    special: ['Way Magic', 'Inspire others, sense and control emotions, transmute materials.'],
    startingEquipment: warlockEquipment
  },
  'Will Warlock': {
    type: 'Warlock',
    stats: [1, 3, 2],
    special: ['Will Magic', 'Communicate telepathically, command others with your mind, read other people\'s thoughts.'],
    startingEquipment: warlockEquipment
  },
  'Wrath Warlock': {
    type: 'Warlock',
    stats: [2, 3, 1],
    special: ['Wrath Magic', 'Create and control the elements (fire, frost, wind, and lightning).'],
    startingEquipment: warlockEquipment
  },
  'Warp Warlock': {
    type: 'Warlock',
    stats: [2, 3, 1],
    special: ['Warp Magic', 'Bend space and time, teleport, view distant places or the past and the future.'],
    startingEquipment: warlockEquipment
  },
  'Woe Warlock': {
    type: 'Warlock',
    stats: [3, 1, 2],
    special: ['Woe Magic', 'Imbue weapons and armor with magical energy, create telekinetic barriers and effects.'],
    startingEquipment: warlockEquipment
  }
}