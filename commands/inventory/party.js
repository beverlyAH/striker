const { getAllInventories } = require('../../db')
const { makeInventory } = require('./utils')
const _ = require('lodash')

module.exports = (msg, args) => {
  return getAllInventories((err, inventory) => {
    if(err) {
      return msg.channel.send('Sorry, there was an error processing your request.')
      .catch(err => {
        console.error(err)
      })
    } else {
      _(inventory).forEach((player, id) => {
        return msg.channel.send({
          embed: makeInventory(player, id)
        })
        .catch(err => {
          console.error(err)
        })
      })
    }
  })
};