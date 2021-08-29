"use strict";

function solveEquation(a, b, c) {
  let arr;
  let discr = b ** 2 - 4 * a * c;
  let x1;
  let x2;
  if (discr < 0) {
    arr = [];
  } else if (discr === 0) {
    x1 = +(-b / (2 * a)).toFixed(2);
    arr = [x1];
  } else {
    x1 = +((-b + Math.sqrt(discr))/(2 * a)).toFixed(2);
    x2 = +((-b - Math.sqrt(discr))/(2 * a)).toFixed(2);
    arr = [x1, x2];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let sumMonth;
  let sum;
  let years;
  let months;
  let percentMonth;

  if (isNaN(percent)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    sum = amount - contribution;
    years = date.getYear() - new Date().getYear();
    months = (date.getMonth() + (12 - (new Date().getMonth()))) * years;
    percentMonth = percent / 12 / 100;
    sumMonth = +(sum * ( percentMonth + percentMonth / (((1 + percentMonth)**months) - 1))).toFixed(4);
    totalAmount = +(sumMonth * months).toFixed(2);
    console.log(totalAmount);
    return totalAmount;
  }
}