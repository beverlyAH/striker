const { removeItem } = require('../../db/')
const { isValidUser, getUserId } = require('./utils')

module.exports = (msg, args) => {
  let user;
  if(isValidUser(args[0])) {
    user = getUserId(args[0])
    args = args.slice(1)
  } else {
    user = msg.author.id
  }
  return removeItem(args, user, (err, response) => {
    if(err) {
      return msg.channel.send('Error removing item(s) from inventory.')
      .catch(err => {
        console.error(err)
      })
    } else {
      return msg.channel.send('Item(s) removed from inventory.')
      .catch(err => {
        console.error(err)
      })
    }
  })
};