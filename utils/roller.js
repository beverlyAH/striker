const isCriticalSuccess = (array) => {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if(array[i] === 6) {
      count++
    }
  }
  return count > 1
}

const appendMessage = (string, arr, disadvantage) => {
  let selection;
  if(disadvantage) {
    selection = Math.min(...arr)
  } else {
    selection = Math.max(...arr)
  }

  if (isCriticalSuccess(arr)) {
    string += ' `CRITICAL SUCCESS!!!`';
    return string;
  } else {
    switch (selection) {
      case 1:
        string += ' `BAD OUTCOME`';
        return string;
      case 2:
      case 3:
        string += ' `failure...`';
        return string;
      case 4:
      case 5:
        string += ' `partial success`';
        return string;
      case 6:
        string += ' `SUCCESS!`'
        return string;
      default:
        return string;
    }
  }
}

module.exports = (n) => {
  let final;
  // error protection 
  if (n > 350) {
    return 'invalid'
  }

  // roll for disadvantage
  if (n === 0) {
    let rolls = []
    rolls.push(Math.floor(Math.random() * 6 + 1))
    rolls.push(Math.floor(Math.random() * 6 + 1))
    let result = Math.min(...rolls)
    final = `\`0D6\` => ${rolls[0]}, ${rolls[1]} => **${result}**`
    return appendMessage(final, rolls, true);
  }

  // no number, or something that's not a number
  if (n === undefined || typeof n !== 'number' || Number.isNaN(parseInt(n)) || parseInt(n) === 1) {
    let singleRoll = Math.floor(Math.random() * 6 + 1)
    final = '`1D6` => **' + singleRoll + '**';
    return appendMessage(final, [singleRoll], false);
  }

  // default case
  let numbers = ''
  let arr = []
  for (let i = 0; i < n; i++) {
    let number = Math.floor(Math.random() * 6 + 1)
    arr.push(number)
    if (number === 6) {
      number = '**' + number + '**'
    }
    numbers += number.toString() + ', '
  }
  final = numbers.slice(0, numbers.length - 2).toString() +
  ' => **' + Math.max(...arr).toString() + '**'
  return appendMessage(final, arr, false)
}