

/*
 * map
 */

function map (func, arr) {
  var newArr = []
 for (var i = 0; i < arr.length; i++) {
   newArr.push(func(arr[i]))
 }
 return newArr
}

/*
 * countIf
 */

function countIf (testFunc, arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (testFunc(arr[i])) count++
  }
  return count
}

module.exports = {
  map: map,
  countIf: countIf
}
