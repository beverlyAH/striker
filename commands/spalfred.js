module.exports = {
  name: '/spalfred',
  description: 'intro',
  execute(msg, args) {
    
    msg.channel.send('**Spalfred:** Very good, sir, ' + args[0] + ', right away sir');
    // msg.channel.send('pong');
  }
};

// Mirssa userID: 656284156560408580