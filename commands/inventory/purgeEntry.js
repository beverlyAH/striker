const { purgeEntry } = require('../../db/')
const { isValidUser, getUserId } = require('./utils')

module.exports = (msg, args) => {
  let user;
  if(args.length) {
    if(isValidUser(args[0])) {
      user = getUserId(args[0])
    } else {
      user = args[0]
    }
    return purgeEntry(user, (err, response) => {
      if(err) {
        return msg.channel.send('There was a problem deleting that entry.')
        .catch(err => {
          console.error(err)
        })
      } else {
        return msg.channel.send(`${args[0]} was deleted from the database.`)
        .catch(err => {
          console.error(err)
        })
      }
    })
  } else {
    return msg.channel.send('Please include an indentifer for the entry you would like to delete.')
    .catch(err => {
      console.error(err)
    })
  }
};