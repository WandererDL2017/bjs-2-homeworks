function compareArrays(arr1, arr2) {
  let result = arr1.length == arr2.length && arr1.every(isEqual);

  function isEqual(value, index) {
    return value === arr2[index];
  }
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(a => a > 0 && a % 3 === 0).map( a => a * 10);
  return resultArr; // array
}
