const rollD6 = require('../utils/roller.js')

module.exports = {
  name: '/s',
  description: 'dice roller',
  execute(msg, args) {
    console.log(args)
    if(args.length > 0 && args[0] !== '1') {
      var number = parseInt(args[0])
      var roll = rollD6(number)
      if(roll === 'invalid') {
        msg.channel.send('Please enter a smaller number.')
        return
      }
      var max = parseInt(roll.slice(roll.length - 3))
      if(max === 6) {
        if(msg.author.id === '656284156560408580') {
          msg.channel.send(`<@${msg.author.id}>: \`${number}D6\` => ${roll}  \`Congratulations on a magnificent success, sir.\``)
        } else {
          msg.channel.send(`<@${msg.author.id}>: \`${number}D6\` => ${roll}  \`SUCCESS!\``)
        }
      } else if (max === 5) {
        msg.channel.send(`<@${msg.author.id}>: \`${number}D6\` => ${roll}  \`partial success\``)
      } else {
        if(msg.author.id === '656284156560408580') {
          msg.channel.send(`<@${msg.author.id}>: \`${number}D6\` => ${roll}  \`My condolences, sir.\``)
        } else {
          msg.channel.send(`<@${msg.author.id}>: \`${number}D6\` => ${roll}  \`failure...\``)
        }
      }
    } else {
      var rolled = rollD6()
      var roll = parseInt(rolled.slice(2, rolled.length - 2))
      if(roll === 6) {
        if(msg.author.id === '656284156560408580') {
          msg.channel.send(`<@${msg.author.id}>: \`1D6\` => ${rolled}  \`Congratulations on a magnificent success, sir.\``)
        } else {
          msg.channel.send(`<@${msg.author.id}>: \`1D6\` => ${rolled}  \`SUCCESS!\``)
        }
      } else if (roll === 5) {
        msg.channel.send(`<@${msg.author.id}>: \`1D6\` => **${rolled}** \`partial success\``)
      } else {
        if(msg.author.id === '656284156560408580') {
          msg.channel.send(`<@${msg.author.id}>: \`1D6\` => ${rolled}  \`My condolences, sir.\``)
        } else {
          msg.channel.send(`<@${msg.author.id}>: \`1D6\` => ${rolled}  \`failure...\``)
        }
      }
    }
  }
};