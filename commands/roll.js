const rollD6 = require('../utils/roller.js')
const mirssaFinish = (msg, roll) => {
  let message = `<@${msg.author.id}>: ${roll}`;
  let outcome = roll.split('`')[1]
  switch (outcome) {
    case 'BAD OUTCOME':
      message += `. I'm so very sorry, sir!`;
      break;
    case 'failure...':
      message += ` My condolences, sir.`;
      break;
    case 'partial success':
      message += ` I'm sure you'll do better next time, sir.`;
      break;
    case 'SUCCESS!':
      message += ` Magnificent, master!`
      break;
    case 'CRITICAL SUCCESS!!!':
      message += ` I've never seen such an amazing display in all my \`ERROR YEARS_OF_SERVICE UNDEFINED\``;
      break;
    default:
      break;
  }
  return message
}
module.exports = {
  name: '/s',
  description: 'dice roller',
  execute(msg, args) {
    let roll = rollD6(parseInt(args[0]))
    if(roll === 'invalid') {
      msg.channel.send(`Please choose a smaller number of dice to roll.`)
      .catch(err => { console.error(err) })
      return 200
    }
    //  Mirssa === '656284156560408580'
    if(msg.author.id === '656284156560408580') {
      let message = mirssaFinish(msg, roll)
      msg.channel.send(message)
      .catch(err => { console.error(err) })
      return 200
    } else {
      msg.channel.send(`<@${msg.author.id}>: ${roll}`)
      .catch(err => { console.error(err) })
      return 200
    }
  }
};