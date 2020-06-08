const { headers, DB } = require('./lib')
const _ = require('lodash')
const axios = require('axios')

module.exports = (user, done) => {
  return axios.get(DB, headers)
  .then(({data}) => {
    if(data[user]) {
      let payload = _.extend({}, data)
      delete payload[user]
      return axios.put(DB, payload, headers)
      .then(({data}) => {
        return done(null, data)
      })
      .catch(err => {
        return done(err)
      })
    } else {
      done(err)
    }
  })
  .catch(err => {
    done(err)
  })
}