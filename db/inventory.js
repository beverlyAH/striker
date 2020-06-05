const {
  headers,
  newInventory,
  axios,
  DB
} = require('./lib')
const _ = require('lodash')

module.exports = (user, done) => {
  return axios.get(DB, headers)
  .then(({data}) => {
    if(!data[user]) {
      data[user] = _.extend({}, newInventory)
    }
    return done(null, data[user])
  })
  .catch(err => {
    return done(err)
  })
}