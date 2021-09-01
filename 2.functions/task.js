"use strict";

// Задание 1
function getArrayParams(arr) {
  let avg;
  let max = arr[0];
  let min = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum += arr[i];
  }

  avg = +(sum / arr.length).toFixed(2);
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  if (func === worker) {
    max = worker(arrOfArr[0]);

    for (let i = 0; i < arrOfArr.length; i++) {
      if (max < worker(arrOfArr[i])) {
        max = worker(arrOfArr[i]);
      }
    }
  } else {
    max = worker2(arrOfArr[0]);

    for (let i = 0; i < arrOfArr.length; i++) {
      if (max < worker2(arrOfArr[i])) {
        max = worker2(arrOfArr[i]);
      }
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let max = Math.abs(arr[0]);
  let min = Math.abs(arr[0]);
  let diff;

  for (let i = 0; i < arr.length; i++) {
    if (max < Math.abs(arr[i])) {
      max = Math.abs(arr[i]);
    }
    if (min > Math.abs(arr[i])) {
      min = Math.abs(arr[i]);
    }
  }
  
  diff = max - min;

  return diff;
}

function mincer(arrOfArr, func) {
  return makeWork(arrOfArr, func);
}