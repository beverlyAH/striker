const {
  headers,
  newInventory,
  DB,
  axios
} = require('./lib')
const _ = require('lodash')

module.exports = (credits, user, done) => {
  return axios.get(DB, headers)
  .then(({data}) => {
    if(!data[user]) {
      data[user] = _.extend({}, newInventory)
    }
    var payload = _.extend({}, data)
    payload[user].credits = parseInt(payload[user].credits) + credits
    return axios.put(DB, payload, headers)
    .then(({data}) => {
      return done(null, data)
    })
    .catch(err => {
      return done(err)
    })
  })
  .catch(err => {
    return done(err)
  })
}