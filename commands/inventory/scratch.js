const _ = require('lodash')

module.exports = (bundle, name) => {
  let payload = {}
  let inventory = '';
  if (Object.keys(bundle.inventory).length) {
    let items = Object.entries(bundle.inventory).sort();
    _(items).forEach((set) => {
      inventory += `[${set[0]}] **${set[1]}**, `
    })
  }
  inventory = inventory.slice(0, inventory.length - 2)

  payload.description = `<@${name}>`
  payload.fields = [
    {
      name: "Credits",
      value: (bundle.credits || 0),
      inline: true
    },
    {
      name: "Points",
      value: (bundle.points || 0),
      inline: true
    },
    {
      name: "Inventory",
      value: (inventory || 'None')
    }
  ]

  return payload
}
