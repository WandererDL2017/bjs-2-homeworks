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
  let sum = arr.reduce((acum, value) => acum + value);
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  max = func(arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++) {
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

function mincer(arrOfArr, func) {
  return makeWork(arrOfArr, func);
}