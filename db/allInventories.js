const { 
  headers, 
  DB, 
  axios 
} = require('./lib')

module.exports = (done) => {
  return axios.get(DB, headers)
  .then(({data}) => {
    return done(null, data)
  })
  .catch(err => {
    return done(err)
  })
}