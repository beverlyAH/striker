const rollD6 = require('./roller.js')

module.exports = {
  name: '/r',
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
        msg.channel.send(`<@${msg.author.id}>: \`${number}D6\` => ${roll}  \`SUCCESS!\``)
      } else if (max === 5) {
        msg.channel.send(`<@${msg.author.id}>: \`${number}D6\` => ${roll}  \`partial success\``)
      } else {
        msg.channel.send(`<@${msg.author.id}>: \`${number}D6\` => ${roll}  \`failure...\``)
      }
    } else {
      var roll = rollD6()
      if(roll === 6) {
        msg.channel.send(`<@${msg.author.id}>: \`1D6\` => **${roll}**  \`SUCCESS!\``)
      } else if (roll === 5) {
        msg.channel.send(`<@${msg.author.id}>: \`1D6\` => **${roll}** \`partial success\``)
      } else {
        msg.channel.send(`<@${msg.author.id}>: \`1D6\` => **${roll}** \`failure...\``)
      }
    }
  }
};