const rollD6 = require('../utils/roller.js')
const commonSpecies = require('./lib/commonSpecies')
const rareSpecies = require('./lib/rareSpecies')
const classes = require('./lib/rollClass')

const characterSpecies = (first, second) => {
  if(first >= 1 && first <= 4) {
    return commonSpecies[second].name
  } else {
    return rareSpecies[second].name
  }
}

const characterClass = (first, second) => {
  if (first === 1 || first === 2) {
    return 'Soldier ' + '(' + classes.soldier[second].name + ')'
  } else if (first === 3 || first === 4) {
    return 'Technician ' + '(' + classes.technician[second].name +')'
  } else {
    return 'Warlock ' + '(' + classes.warlock[second].name + ')'
  }
}

module.exports = {
  name: '/character',
  description: 'roll character',
  execute(msg, args) {
    var res = [rollD6(), rollD6(), rollD6(), rollD6()]
    msg.channel.send(
    `You\'ve rolled a ${res[0]}, ${res[1]}, ${res[2]}, and ${res[3]}!\nThis makes you a(n): ` +
    characterSpecies(res[0], res[1]) + ' ' +
    characterClass(res[2], res[3]))
  }
};