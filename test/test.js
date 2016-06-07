var assert = require('./assert')
var data = require('./../data')
var expectedArrayOfArrays = require('./../array-of-arrays')
var expectedFormattedDates = require('./../formatted-dates')
var utilsIndex = require('./../index')
var filter = require('./../lib/filter.js')


/*
 * Emails
 */

function isEmail (str) {
  return str.includes("@") && str.includes(".")
}

var emails = filter(isEmail, data)
assert(emails.length, 44, 'filter and isEmail returns the correct number of emails')


/* isNumber */

function isNumber (thing) {
  return (typeof thing === 'number')
}

/* count If */

var meaningOfLife = '42'

var isString = function (s) {
  return typeof s === 'string'

}

var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
var expectedNumberCount = 4 // do you know which 4 are numbers?
var expectedStringCount = 2
var numberCount = utilsIndex.countIf(isNumber, mixedArray)
var stringCount = utilsIndex.countIf(isString, mixedArray)

assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array')
assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')

/* Map */

var someNumbers = [2, 4, 6]
var expectedNumbers = [4, 8, 12]
var timesTwo = function (num) {
  return num * 2
}
var actualNumbers = utilsIndex.map(timesTwo, someNumbers)
for (var i = 0; i < expectedNumbers.length; i++) {
  assert(expectedNumbers[i], actualNumbers[i], 'number mapped correctly')
}

/*
 * filterStringsWithCommas
 */

function filterStringsWithCommas (str) {
  return str.includes(',')
}

var stringsWithCommas = filter(filterStringsWithCommas, data)
assert(stringsWithCommas.length, 62, 'filter and filterStringsWithCommas returns the correct number of commas')

/*
 * splitStringByCommas
 */

function splitStringByCommas (str) {
  return str.split(",")
}

var arrayOfArrays = utilsIndex.map(splitStringByCommas, stringsWithCommas)
var matchesArrayOfArrays = arrayOfArrays.every(function (arr, i) {
  return arr.every(function (str, j) {
    return str === expectedArrayOfArrays[i][j]
  })
})

assert(matchesArrayOfArrays, true, 'the generated array of array of strings matches the expected array')
