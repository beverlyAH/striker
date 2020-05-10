let coin = require('../utils/coinflip.js')

module.exports = {
  name: '/coin',
  description: 'flip a coin.',
  execute(msg, args) {
    let flip = coin()
    if(flip) {
      msg.channel.send('Heads!')
    } else {
      msg.channel.send('Tails!')
    }
  }
};