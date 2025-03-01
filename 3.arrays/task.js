function compareArrays(arr1, arr2) {
  return arr1.length == arr2.length && arr1.every((value, index) => value === arr2[index]); // boolean
}

function advancedFilter(arr) {
  return arr.filter(a => a > 0 && a % 3 === 0).map( a => a * 10);// array
}
