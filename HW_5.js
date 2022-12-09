// let string = "Every cloud has a silver lining";
// arr = string.split("").reverse().join("");
// newString = "";
// for(i = 0; i<string.length; i++) {
//   newString = newString + string[(string.length-1)-i]
// }

// console.log(arr);
// console.log(newString);

// Задача 1

// function arrLengths(arr) {
//   let result = arr.map((el) => el.length);
//   console.log(result);
// }

// arrLengths(["Hello!", "What's new?", "Sun"]);

// Задача 2
// function currentSums(arr) {
//   let newArr = [];
//   let result = 0;
//   for (i = 0; i < arr.length; i++) {
//     result = result + arr[i];
//     newArr.push(result);
//   }
//   return newArr;
// }

// console.log(currentSums([2, 3, 5, 7, 11, 13, 17, 19]));

// function currentSum(arr) {
//   let newArr = [];
//   arr.reduce((acc, cur) => {
//     newArr.push(acc);
//     return acc + cur;
//   });
//   return newArr;
// }

// console.log(currentSum([2, 3, 5, 7, 11, 13, 17, 19]));

// Задача 3
// function sumSeven(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     for (a = 0; a < arr.length; a++) {
//       if (arr[i] + arr[a] === 7) {
//         newArr.push([arr[i], arr[a]]);
//       }
//       continue;
//     }
//   }
//   return newArr;
// }

// console.log(sumSeven([1, 5, 4, 3, 7, 0, 2, 6, 9, 13]));

// function sumSeven(arr) {
//   return arr.reduce((acc, cur, i) => {
//     arr.slice(i).forEach((el) => {
//       if (cur + el === 7) {
//         acc.push([cur, el]);
//       }
//     });
//     return acc;
//   }, []);
// }

// console.log(sumSeven([1, 5, 4, 3, 7, 0, 2, 6, 9, 13]));

// Задача 4
// function firstLetters(str) {
//   let arr = str.split(" ");
//   let result = arr.map((el) => el[0]);
//   return result;
// }

// console.log(firstLetters("Every cloud has a silver lining"));

// Задача 5
// function droppedStr(str) {
//   let arr = str.split("");
//   let result = arr.map((el, i) => arr[i-1] + el + arr[i + 1]);
//   return result;
// }

// console.log(droppedStr("Every cloud has a silver lining"));

// Задача 6
// function decrease(arr) {
//   let result = arr.sort((a, b) => a - b);
//   console.log(result);
// }

// decrease([10, 4, 2, 7, 34, 6, 12]);

// Задача 7
// function threeArrsDecrease(arr1, arr2, arr3) {
//   let result = arr1
//     .concat(arr2, arr3)
//     .sort((a, b) => a - b)
//     .join(" ");
//   console.log(result);
// }

// threeArrsDecrease([10, 4, 2], [7, 34, 6, 12], [5, 9, 2, 45]);

// Задача 8
// function sumDeepArr(arr) {
//   let result = arr.flat(Infinity).reduce((acc, cur) => acc + cur);
//   return result;
// }

// console.log(sumDeepArr([[1, 2, 3], [4, 5], [6]]));

// Задача 9
// function reverseArr(arr) {
//   let result = [];
//   for (i = 1; i <= arr.length; i++) {
//     result.push(arr[arr.length - i]);
//   }
//   return result;
// }

// console.log(reverseArr([1, 5, 7, 3, 9, 2, 12]));

// function reverseArr(arr) {
//   return arr.map((el, i, arr) => arr[arr.length - 1 - i]);
// }

// console.log(reverseArr([1, 5, 7, 3, 9, 2, 12]));

// Задача 10
// function sumTen(arr) {
//   let sum = 0;
//   let result = 0;
//   for (let i = 0; i < arr.length && sum < 10; i++) {
//     sum = sum + arr[i];
//     result += 1;
//   }
//   console.log(result);
// }

// sumTen([1, 7, 3, 5, 2]);
// sumTen([5, 8, 3, 2]);

// function sumTen2(arr) {
//     return arr.reduce((acc, cur, index) => {
//       if (acc !== -1) {
//         // found the answer already
//         return acc
//       }
//       const sum_before = arr.slice(0, index).reduce((acc, cur) => acc+cur, 0)
//       if (sum_before < 10) {
//         return -1
//       }
//       return index
//     }, -1);
//   }

// console.log(sumTen2([1, 7, 3, 5, 2]));
// console.log(sumTen2([5, 8, 3, 2]));
// console.log(sumTen2([10,5, 8, 3, 2]));

// function sumTen2(arr) {
//   let a = -1;
//   arr.reduce((acc, cur, i) => {
//     if (acc >= 10 && a === -1) {
//       a = i;
//       return acc + cur;
//     }
//     return acc + cur;
//   }, 0);
//   return a;
// }

// console.log(sumTen2([1, 7, 3, 5, 2]));

// Задача 11
// function arrayFill (char, n) {
//     let arr = [];
//     while (arr.length<n) {
//         arr.push(char);
//     }
// return arr;
// }

// console.log(arrayFill("x", 4));

// function fillArr(char, n) {
//   let arr = [];
//   while (arr.length < n) {
//     arr.push(char);
//   }
//   console.log(arr);
// }

// fillArr("x", 5);

// function fillArr(char, n) {
//   let arr = new Array(n).fill(char);
//   return arr;
// }

// console.log(fillArr("p", 5));

// function fillArr(char, n) {
//   let arr = [...new Array(n)];
//   return arr.map((el) => char);
// }
// console.log(fillArr("p", 7));
