const getInventory = require('./inventory')
const listInventories = require('./party')
const updateCredits = require('./credits')
const addItems = require('./add')
const removeItems = require('./remove')
const helpMessage = require('./help')
const updatePoints = require('./points')
const purgeEntry = require('./purgeEntry.js')

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
      case 'purge':
        return purgeEntry(msg, args.slice(1));
      default:
        return getInventory(msg, args);
    }
  }
};