const getInventory = require('./inventory')
const listInventories = require('./party')
const updateCredits = require('./credits')
const addItems = require('./add')
const removeItems = require('./remove')
const helpMessage = require('./help')
const updatePoints = require('./points')

module.exports = {
  name: '/inventory',
  description: 'inventory management.',
  execute(msg, args) {
    switch (args[0]) {
      case 'list':
        return listInventories(msg, args);
      case 'add':
        return addItems(msg, args.slice(1))
      case 'remove':
        return removeItems(msg, args.slice(1))
      case 'credits': 
        return updateCredits(msg, args.slice(1));
      case 'points':
        return updatePoints(msg, args.slice(1));
      case 'help':
        return helpMessage(msg, args)
      default:
        return getInventory(msg, args);
    }
  }
};