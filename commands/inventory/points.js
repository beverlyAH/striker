const { updatePoints } = require('../../db')
const { isValidUser, getUserId } = require('./utils')

module.exports = (msg, args) => {
  let points, user;
  if(isValidUser(args[0])) {
    user = getUserId(args[0])
    points = parseInt(args[1])
  } else {
    points = parseInt(args[0])
    user = msg.author.id
  }
  return updatePoints(points, user, (err, response) => {
    if(err) {
      console.error(err)
    } else {
      return msg.channel.send(`<@${user}> now has ${response.data[user].points} Space Points.`)
      .catch(err => {
        console.error(err)
      })
    }
  })
}