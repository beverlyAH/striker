const classes = require('./lib/classes.js')

module.exports = {
  name: '/class',
  description: 'class information',
  execute(msg, args) {
    let className = ''
    if(args.length === 1) {
      className = args[0][0].toUpperCase() + args[0].slice(1, args[0].length).toLowerCase()
    } else if (args.length > 1) {
      for (let i = 0; i < args.length; i++) {
        className += args[i][0].toUpperCase() + args[i].slice(1, args[i].length).toLowerCase()
        className += ' '
      }
      className = className.slice(0, className.length - 1)
    }
    msg.channel.send({
      embed: {
        title: className,
        fields: [
          {
            name: '**Statistics**',
            value: `**BODY:** ${+classes[className].stats[0]} | ` +
            `**MIND:** ${+classes[className].stats[1]} | ` +
            `**SPIRIT:** ${+classes[className].stats[2]}`,
            inline: true
          },
          {
            name: '**Type**',
            value: classes[className].type,
            inline: true
          },
          {
            name: '**SPECIAL: ' + classes[className].special[0] + '**',
            value: classes[className].special[1]
          },
          {
            name: '**STARTING EQUIPMENT**',
            value: '1 Melee or Ranged weapon, communicator, 100 credits, ' + classes[className].startingEquipment.join(', '),
          }
        ]
      }
    })
    .catch(err => console.error(err))
  }
}