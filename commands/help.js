module.exports = {
  name: '/help',
  description: 'list of available commands.',
  execute(msg, args) {
    //  return
      msg.channel.send({
        embed: {
        title: 'Available Commands',
        color: 3447260,
        fields: [
          {
            name: '/ability [class]',
            value: 'List available abilities for a given class.'
          },
          {
            name: '/ability [abilityName]',
            value: 'Display rule text for a given ability.'
          },
          {
            name: '/coin',
            value: 'Flip a coin.'
          },
          {
            name: '/s',
            value: 'Roll a single D6.'
          },
          {
            name: '/s [n]',
            value: 'Roll multiple D6.'
          },
          {
            name: '/spalfred [something]',
            value: 'Request Spalfred\'s assistance. He may not listen.'
          },
          {
            name: '/stu [something]',
            value: 'Something\'s someone\'s favorite.'
          },
        ],
        timestamp: new Date,
        // footer: {
        //   // icon_url: client.user.avatarURL,
        //   text: msg.author.username
        // }
        }
      }).catch(err => {
        console.error(err)
      })
  }
};