module.exports = {
  name: '/points',
  description: 'space point information',
  execute(msg, args) {
    msg.author.send(
    `#### Space Points ####`
    + '\n' +
    `> Space adventurers have a knack for turning the odds in their favor and succeeding. This ability is represented by Space Points! They are a precious and limited resource which can used at any time during your adventures to turn a situation to your advantage.`
    + '\n' +
    `> **Starting Space Points**`
    + '\n' + 
    `> Each character starts with 1 Space Point for every person in the group including all the players and the Spacemaster.`
    + '\n' +
    `> **Using Space Points**`
    + '\n' +
    `> Space Points are powerful, but difficult to acquire. Use them wisely. At any point during an adventure you can spend one or more Space Points to change something in the game or get a different outcome.`
    + '\n' +
    `> **Changing die rolls**`
    + '\n' +
    `> The most common use for Space Points is changing a die roll. If you rolled a Challenge and don’t like the outcome, you can spend Space Points to change it as follows:`
    + '\n' +
    `>>> * Spend 1 Space Point to ignore the results of the Challenge and roll again.`
    + '\n' +
    `* Spend 2 Space Points to ignore the results of the Challenge and roll again adding +1d6 to the roll.`
    + '\n' +
    `* Spend 3 Space Points to automatically pass the Challenge with no reroll needed.`
    + '\n' +
    + '\n' +
    `> **Changing the story**`
    + '\n' +
    `Space Points can also be used to make small changes to the story. For example, if a merchant ran out of an item you needed or you missed the last transport off-planet, you could spend a Space Point to change that detail. Maybe the shopkeeper finds one more of the item in the back or in a display case or maybe the transport stops and re-opens its doors to allow you to board. Or maybe you left a key piece of equipment behind on your ship. You could spend a Space Point to say that you actually remembered to bring the item at the last minute.
    Space Points can allow you to make any change to the story as long as the Spacemaster agrees. For larger changes, the Spacemaster may require you to spend more than one Space Point or may require multiple players to contribute Space Points.
    `)
  }
};

/*
Sharing Space Points
Space Points can also be shared with your fellow space adventurers. You can offer your Space Points to a player in need, contribute to the points they have chosen to spend, or pool your Space Points with multiple players. The Spacemaster may also rule that combining your Space Points with other players has a more powerful effect or that your desired outcome will cost less Space Points if you and another player both contribute.
Spend 1 Space Point to ignore the results of the Challenge and roll again.
Spend 2 Space Points to ignore the results of the Challenge and roll again adding +1d6 to the roll. Spend 3 Space Points to automatically pass the Challenge with no reroll needed.
  
Page 1 of 2
Earning Space Points
You earn new Space Points every time you level up. You gain 1 Space Point for every person in the group at the time of level up including all the players and the Spacemaster.
You can also earn Space Points through acts of Dramatic Heroism. Each time your character performs an act of Dramatic Heroism, you gain 1 Space Point. To qualify as an act of Dramatic Heroism the act must:
1. Accomplish a significant task in pursuit of your party’s goals
2. Occur at a dramatically appropriate time (typically the climax of an adventure)
3. Require significant risk on the part of the hero
Not every adventure will include a dramatically heroic moment and not every character will have an opportunity to act dramatically heroic.
New Adventurers
Any time a new space adventurer joins the group, 1 Space Point is added to each player’s pool. Your resolve and capabilities are reinforced by the added support of a new companion. When an adventurer leaves the group or cannot be present, you do not lose the Space Point. You friend is still with you in spirit!
*/