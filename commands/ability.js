const abilities = require('./lib/abilities.js')
const abilityInfo = require('./lib/abilityInfo')
const Discord = require('discord.js')
const bot = new Discord.Client()

module.exports = {
  name: '/ability',
  description: 'ability info',
  execute(msg, args) {
    for(var i = 0; i < args.length; i++) {
      args[i] = args[i][0].toUpperCase() + args[i].slice(1).toLowerCase()
    }
    let flag = args.join(' ')
    console.log(flag)
    if(args.length === 0) {
      return
    }
    if(abilities[flag]) {
      msg.channel.send({embed: {
        color: 3447003,
        title: `${flag} Abilities`,
        description: `${abilities[flag].list.join(', ')}`,
        timestamp: new Date()
      }
      }).catch(err => {
        console.error(err)
      })
    } else if (abilityInfo[flag]) {
      msg.channel.send({
        embed: {
          color: 3447003,
          title: `${flag}`,
          description: `${abilityInfo[flag]}`,
          timestamp: new Date()
        }
      })
    }
  }
};

// if(abilities[flag]) {
//   msg.channel.send(`**${flag} Abilities:** ${abilities[flag].list.join(', ')}`)
// } else if (abilityInfo[flag]) {
//   msg.channel.send(`**${flag}:** ${abilityInfo[flag]}`)
// }