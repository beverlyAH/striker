const classes = require('./lib/classes.js')

module.exports = {
  name: '/class',
  description: 'class information',
  execute(msg, args) {
    for (let key in classes) {
      for(let classe in key) {
        console.log(classes[key][cl])
      }
    }
  }
}