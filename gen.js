/** @format */

function numberToLetters(num) {
  let result = ''
  while (num > 0) {
    num--
    const remainder = num % 26
    result = String.fromCharCode(97 + remainder) + result
    num = Math.floor(num / 26)
  }
  return result
}

function lettersToNumber(str) {
  let result = 0
  for (let i = 0; i < str.length; i++) {
    const charValue = str.charCodeAt(i) - 96
    result = result * 26 + charValue
  }
  return result
}

for (let i = 0; i < 100; i++) {
  console.log(numberToLetters(i))
}
