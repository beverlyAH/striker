const SECRET = process.env.SECRET

module.exports = {
  axios: require('axios'),
  _: require('lodash'),
  DB: process.env.DB,
  headers: {
    headers: {
      "secret-key": SECRET,
      "versioning": false
    }
  },
  newInventory: {
    credits: 0,
    points: 0,
    inventory: {}
  }
}