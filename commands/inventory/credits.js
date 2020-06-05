const { updateCredits } = require('../../db')
const { isValidUser, getUserId } = require('./utils')

module.exports = (msg, args) => {
  let credits, user;
  if(isValidUser(args[0])) {
    user = getUserId(args[0])
    credits = parseInt(args[1])
  } else {
    credits = parseInt(args[0])
    user = msg.author.id
  }
  return updateCredits(credits, user, (err, response) => {
    if(err) {
      console.error(err)
    } else {
      return msg.channel.send(`<@${user}>'s balance is now ${response.data[user].credits} credits.`)
      .catch(err => {
        console.error(err)
      })
    }
  })
}