// let names = ["Alex", "Ivan", "Tony", "Petr"];
// const findElem = names.find((el) => el === "Tony");

// console.log(findElem);

// let names = ["Alex", "Ivan", "Tony", "Petr"];
// const findElem = names.find((el) => el === "Kate");

// console.log(findElem);

// let names = ["Alex", "Ivan", "Tony", "Petr"];
// const findElem = names.find((el) => el !== "Ivan");

// console.log(findElem);

// let names = [
//   { name: "Alex" },
//   { name: "Ivan" },
//   { name: "Tony" },
//   { name: "Petr" },
// ];
// const findElem = names.find((el) => el.name === "Ivan");

// console.log(findElem);

// let names = [
//   { name: "Alex" },
//   { name: "Ivan" },
//   { name: "Tony" },
//   { name: "Petr" },
// ];
// const findElem = names.find((el) => el.name === "Ivan" || el.name === "Tony");

// console.log(findElem);

// let names = [
//   { name: "Alex" },
//   { name: "Ivan" },
//   { name: "Tony" },
//   { name: "Petr" },
// ];

// let filterArr = names.filter((el) => el.name === "Alex" || el.name === "Tony");

// console.log(filterArr);

// let names = [
//   { name: "Alex" },
//   { name: "Ivan" },
//   { name: "Tony" },
//   { name: "Petr" },
// ];

// let filterArr = names.filter(
//   (el, i) => (el.name === "Alex" || el.name === "Tony") && i !== 0
// );

// console.log(filterArr);

// const names = [
//   { name: "Alex" },
//   { name: "Ivan" },
//   { name: "Tony" },
//   { name: "Petr" },
// ];

// const mappArr = names.map((el) => el.name);

// console.log(mappArr);

// const names = [
//   { name: "Alex" },
//   { name: "Ivan" },
//   { name: "Tony" },
//   { name: "Petr" },
// ];

// const mappArr = names.map((el) => ({ name: el.name, handCount: 2 }));

// console.log(mappArr);

// const names = [
//   { name: "Alex" },
//   { name: "Ivan" },
//   { name: "Tony" },
//   { name: "Petr" },
// ];

// const arr = names.forEach((el) => (el.name = "Unknown"));

// console.log(arr);

// const names = [
//   { name: "Alex" },
//   { name: "Ivan" },
//   { name: "Tony" },
//   { name: "Petr" },
// ];
// console.log(names);
// const arr = names.forEach((el) => (el.name = "Unknown"));

// console.log(arr);
// console.log(names);

// const names = [
//   { name: "Alex" },
//   { name: "Ivan" },
//   { name: "Tony" },
//   { name: "Petr" },
// ];
// console.log(names);
// const arr = names.map(() => ({ name: "Unknown" }));

// console.log(arr);
// console.log(names);

// const arr = [1, -2, 5, -6, 9, -8, 5];

// const result = arr.reduce((prev, cur) => {
//   if (cur > 0) {
//     return prev + cur;
//   }
//   return prev;
// });

// console.log(result);

// const arr = [-1, -2, -5, -6, -9, -8, -5];

// const result = arr.reduce((prev, cur) => {
//   if (cur > 0) {
//     return prev + cur;
//   }
//   return prev;
// });

// console.log(result); //Показывает -1, потому что попадает первое значение

// const arr = [-1, -2, -5, -6, -9, -8, -5];

// const result = arr.reduce((prev, cur) => {
//   if (cur > 0) {
//     return prev + cur;
//   }
//   return prev;
// }, 0); //Передает первое значение

// console.log(result); //Показывает 0

// function sumPositive(arr) {
//   let filterArr = arr.filter((e) => e > 0 && e % 2 === 0);
//   let result = filterArr.reduce((prev, cur) => prev + cur);
//   console.log(result);
// }

// sumPositive([2, 6, -1, 7, -20, -4, 9, 1]);
// sumPositive([-4, 2, 5, -2, 54]);

// let sumPositive = (arr) =>
//   arr.filter((el) => el > 0 && el % 2 === 0).reduce((prev, cur) => prev + cur);

// console.log(sumPositive([1, -4, 6, 2, -5, 24, 13, 9, 3, -6, 4]));

// function uniqueElements(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(uniqueElements([1, 2, 3, 2, 4, 3, 5, 1, 3]));
// console.log(uniqueElements([3, 6, 1, 8, 3, 78, 3, 9, 2, 6, 1, 7, 45]));

function arrsCompare(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        continue;
      }
      return false;
    }
    return true;
  }
  return false;
}

console.log(arrsCompare([1, 2, 4, 65, 7], [1, 2, 4, 65, 7]));
console.log(arrsCompare([1, 5, 3, 7, 3], [1, 32, 4]));
console.log(arrsCompare([1, 3, 5, 7], [2, 4, 6, 8]));
