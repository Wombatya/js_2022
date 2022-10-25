// Задача 1.
// function square(number) {
//   return number ** 2;
// }

// console.log(square(3));
// console.log(square(5));
// console.log(square(10));

// Задача 2.
// let sum = function (number1, number2) {
//   return number1 + number2;
// };

// console.log(sum(3, 5));
// console.log(sum(10, 7));
// console.log(sum(8, 26));

// Задача 3.
// let result = (number1, number2, number3) => {
//   return (number1 - number2) / number3;
// };

// console.log(result(178, 43, 9));
// console.log(result(2567, 653, 6));
// console.log(result(30, 76, 2));

// Задача 4.
// function dayOfTheWeek(number) {
//   let days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   if (number <= 0 || number > 7) {
//     return `There's no such a day`;
//   } else {
//     let i = 1;
//     for (; i < number; i++) {}
//     return `${days[i - 1]}`;
//   }
// }

// console.log(dayOfTheWeek(-10));
// console.log(dayOfTheWeek(7));
// console.log(dayOfTheWeek(4));
// console.log(dayOfTheWeek(15));

// Задача 5
// function isEqual(number1, number2) {
//   if (number1 === number2) {
//     return true;
//   }
//   return false;
// }

// console.log(isEqual(2, 5));
// console.log(isEqual(4, 4));
// console.log(isEqual(19, 19));

// Задача 6
// function isSumMore10(number1, number2) {
//   if (number1 + number2 > 10) {
//     return true;
//   }
//   return false;
// }

// console.log(isSumMore10(2, 5));
// console.log(isSumMore10(4, 1));
// console.log(isSumMore10(19, 25));

// Задача 7
// function isNegative(number1) {
//   if (number1 < 0) {
//     return true;
//   }
//   return false;
// }

// console.log(isNegative(2));
// console.log(isNegative(-17));
// console.log(isNegative(-0.35));
// console.log(isNegative(4));

// Задача 8
// function isNumberInRange(number1) {
//   if (number1 > 0 && number1 < 10) {
//     return true;
//   }
//   return false;
// }

// console.log(isNumberInRange(2));
// console.log(isNumberInRange(-17));
// console.log(isNumberInRange(36));
// console.log(isNumberInRange(4));

// Задача 9
// function isNumberInRange(number1) {
//   if (number1 > 0 && number1 < 10) {
//     return true;
//   }
//   return false;
// }

// function arrRange(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// }

// arrRange([1, 40, 24, 7, -20, 4, 58]);
// arrRange([5, 290, -19, 47, 10, 2, 8, 12]);

//  Задача 10
// function getDigitsSum(number) {
//   number = String(number);
//   let digit;
//   digitsSum = 0;
//   for (i = 0; i < number.length; i++) {
//     digit = Number(number[i]);
//     digitsSum = digitsSum + digit;
//   }
//   console.log(digitsSum);
// }

// getDigitsSum(25);
// getDigitsSum(69);
// getDigitsSum(17);
// getDigitsSum(265);
// getDigitsSum(712);

// Задача 11
// function getDigitsSum(number) {
//   number = String(number);
//   let digit;
//   digitsSum = 0;
//   for (i = 0; i < number.length; i++) {
//     digit = Number(number[i]);
//     digitsSum = digitsSum + digit;
//   }
//   return digitsSum;
// }

// function years() {
//   let arr = [];
//   for (p = 1; p <= 2022; p++) {
//     if (getDigitsSum(p) === 13) {
//       arr.push(p);
//     }
//   }
//   return arr;
// }

// console.log(years());

// Задача 12
// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// console.log(isEven(4));
// console.log(isEven(7));
// console.log(isEven(173));
// console.log(isEven(290));

// Задача 13
// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// function evenArray(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (isEven(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(evenArray([2, 7, 13, 4356, 2345, 123, 56, 45, 8]));

// Задача 14
// function getDivisors(number) {
//   let arr = [];
//   for (i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(getDivisors(4));
// console.log(getDivisors(18));

// Задача 15
// function getDigitsSum(number) {
//   number = String(number);
//   let digit;
//   digitsSum = 0;
//   for (i = 0; i < number.length; i++) {
//     digit = Number(number[i]);
//     digitsSum = digitsSum + digit;
//   }
//   return digitsSum;
// }

// function simpleQuantity(num) {
//   let sum = getDigitsSum(num);
//   if (sum > 9) {
//     sum = getDigitsSum(sum);
//     return sum;
//   }
//   return sum;
// }

// console.log(simpleQuantity(45));
// console.log(simpleQuantity(196));
// console.log(simpleQuantity(123456789));
// console.log(simpleQuantity(999999));
// console.log(simpleQuantity(102));
