const abilities = require('./lib/abilities.js')
const abilityInfo = require('./lib/abilityInfo')

module.exports = {
  name: '/ability',
  description: 'ability info',
  execute(msg, args) {
    let flag = args.join(' ')
    if(args.length === 0) {
      return
    }
    if(abilities[flag]) {
      msg.channel.send(`**${flag} Abilities:** ${abilities[flag].list.join(', ')}`)
    } else if (abilityInfo[flag]) {
      msg.channel.send(`**${flag}:** ${abilityInfo[flag]}`)
    }
  }
};