const { getInventory } = require('../../db')
const { isValidUser, getUserId, makeInventory } = require('./utils')

module.exports = (msg, args) => {
  let user;
  if(args[0] !== undefined && isValidUser(args[0])) {
    user = getUserId(args[0])
  } else {
    user = msg.author.id
  }
  return getInventory(user, (err, data) => {
    if(err) {
      console.error(err)
      return msg.channel.send('Error occurred retrieving inventory.')
      .catch(err => {
        console.error(err);
      })
    } else {
      return msg.channel.send({
        embed: makeInventory(data, user)
      })
      .catch(err => {
        console.error(err)
      })
    }
  })
};