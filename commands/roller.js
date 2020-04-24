module.exports = (n) => {
  if (n > 456) {
    return 'invalid'
  }
  if(n === undefined || typeof n !== 'number' || Number.isNaN(parseInt(n)) || n === '1') {
    return Math.floor(Math.random() * 6 + 1)
  } else {
    var numbers = ''
    var arr = []
    for (var i = 0; i < n; i++) {
      var number = Math.floor(Math.random() * 6 + 1)
      arr.push(number)
      if(number === 6 || number === 5) {
        number = '**' + number + '**'
      }
      numbers += number.toString() + ', '
    }
    return numbers.slice(0, numbers.length - 2).toString() +
    ' => **' + Math.max(...arr).toString() + '**'
  }
}