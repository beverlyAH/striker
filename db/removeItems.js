const { headers,
  axios,
  DB
} = require('./lib')
const _ = require('lodash')

module.exports = (items, user, done) => {
  return axios.get(DB, headers)
  .then(({data}) => {
    let payload = _.extend({}, data)
    items.forEach((item) => {
      delete payload[user].inventory[item]
    })
    axios.put(DB, payload, headers)
    .then(({data}) => {
      return done(null, data)
    })
  })
  .catch(err => {
    return done(err)
  })
}