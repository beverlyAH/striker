const { addItem } = require('../../db')
const { isValidUser, getUserId } = require('./utils')

module.exports = (msg, args) => {
  let user;
  if(isValidUser(args[0])) {
    user = getUserId(args[0])
    args = args.slice(1)
  } else {
    user = msg.author.id
  }
  return addItem(args, user, (err, response) => {
    if(err) {
      console.error(err)
      return msg.channel.send('Error occurred adding to inventory.')
      .catch(err => {
        console.error(err)
      })
    } else {
      return msg.channel.send('Item(s) added to inventory.')
      .catch(err => {
        console.error(err)
      })
    }
  })
}