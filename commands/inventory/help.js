module.exports = (msg) => {
  return msg.channel.send({
    embed: {
      title: 'Inventory Help',
      color: 3447260,
      description: 'How to use the inventory system!',
      fields: [
        {
          name: '`/inventory`',
          value: 'Base command, retrieves your inventory. Run this once before using any other command, it will initialize your inventory.'
        },
        {
          name: '`/inventory add`',
          value: 'Adds items to your inventory. Add multiples separated by commas.\n' +
          'Example: `/inventory add Medium Armor, Hoverbike`'
        },
        {
          name: '`/inventory remove [itemIDs]`',
          value: 'Removes items (by item ID) from your inventory. Multiple items, not separated by commas.\n' +
          'Example: `/inventory remove 01 02`'
        },
        {
          name: '`/inventory credits [number]`',
          value: 'Adds or removes credits to your inventory.\n' +
          'Example: `/inventory credits 500` OR `/inventory credits -100`'
        }
      ],
      timestamp: new Date,
    }
  })
}