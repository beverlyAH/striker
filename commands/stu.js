module.exports = {
  name: '/stu',
  description: 'someone\'s favorite',
  execute(msg, args) {
    msg.channel.send(`${args.slice().join(' ')} is Disco Stu's FAVORITE.`);
  }
};