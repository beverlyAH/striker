const { 
  headers,
  newInventory,
  axios,
  DB,
} = require('./lib')
const _ = require('lodash')

module.exports = (items, user, done) => {
  console.log(items)
  if(items.length > 1) {
    items = items.join(' ').split(',')
  }
  return axios.get(DB, headers)
  .then(({data}) => {
    if(!data[user]) {
      data[user] = _.extend({}, newInventory)
    }
    const ids = Object.keys(data[user].inventory)
    const lastItemId = Math.max(...ids, -1)
    if(items.length === 1) {
      data[user].inventory[(lastItemId + 1).toString().padStart(2, '0')] = items[0]
    } else {
      let inc = 1
      items.forEach(item => {
        let id = (lastItemId + inc).toString().padStart(2, '0')
        data[user].inventory[id] = item.trim()
        inc++
      })
    }
    return axios.put(DB, data, headers)
    .then(({data}) => {
      done(null, data)
    })
    .catch(err => {
      done(err)
    })
  })
  .catch(err => {
    done(err)
  })
}