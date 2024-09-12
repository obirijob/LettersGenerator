/** @format */

function numberToLetters(number) {
  let letters = ''

  var numArr = `abcdefghijklmnopqrstuvwxyz`

  while (number > 0) {
    let remainder = (number - 1) % numArr.length
    letters = numArr[remainder] + letters
    number = Math.floor((number - 1) / numArr.length)
  }

  return letters
    .split('')
    .map((_, i) => (i % 4 === 0 && i !== 0 ? `-${_}` : _))
    .join('')
    .toUpperCase()
}

console.log(numberToLetters(999999999))
