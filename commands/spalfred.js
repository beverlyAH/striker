require('dotenv').config();
const MIRSSA = process.env.MIRSSA

module.exports = {
  name: '/spalfred',
  description: 'everyone\'s favorite space butler.',
  execute(msg, args) {
    if(msg.author.id === MIRSSA) {
      msg.channel.send('Very good, sir, ' + args.slice().join(' ') + ', right away sir');
    } else {
      msg.channel.send(`I'm afraid any requests must be routed through Mr. Thrash, <@${msg.author.id}>.`)
    }
  }
};