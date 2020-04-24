module.exports = {
  name: '/stu',
  description: 'someone\'s favorite',
  execute(msg, args) {
    msg.channel.send(`${args[0]} is Disco Stu's FAVORITE.`);
  }
};