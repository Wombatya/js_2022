// const twoArr = (arr1, arr2) =>
//   arr1.length === arr2.length && arr1.every((el, ind) => el === arr2[ind]);

// console.log(twoArr([1, 5, 6, 7, 3], [1, 6, 2]));
// console.log(twoArr([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

// const compareArr = (arr1, arr2) => {
//   const str1 = arr1.toString();
//   const str2 = arr2.toString();

//   if (str1.length === str2.length) {
//     return str1 === str2;
//   }
//   return false;
// };

// console.log(compareArr([1, 4, 2, 6], [1, 7, 3]));
// console.log(compareArr([3, 2, 1], [3, 2, 1]));

// const multiArr = [1, 2, [3, 4, 5, [6, 7, 8]], 9, 10, [11, 12, [13, 14, [15]]]];
//  const firstTry = (arr) =>
//     arr
//     .toString()
//     .split(',')
//     .map(el => +el);

//  console.log(firstTry(multiArr));

//  const secondTry = (arr) => arr.flat(Infinity);

//  console.log(secondTry(multiArr));

// const number = 1;

// const increment = (a) => {
//     console.log(a, 'before');
//     a+=1;
//     console.log(a, 'after');
// }

// console.log(number, 'one');
// increment(number);
// console.log(number, 'two');

// let number = 1;

// const increment = (a) => {
//     console.log(a, 'before');
//     number+=1;
//     console.log(a, 'after');
// }

// console.log(number, 'one');
// increment(number);
// console.log(number, 'two');

// const arr = [1, 2, 3, 4];

// const arrPush = (arr) => {
//     arr.push(5);
// }

// console.log(arr, 'one');
// arrPush(arr);
// console.log(arr, 'two');

// const arr = [1, 2, 3, 4];
// const arr2 = arr;

// const arrPush = (arr) => {
//     arr.push(5);
// }

// console.log(arr, 'one');
// arrPush(arr);
// console.log(arr, 'two');
// console.log(arr2);

// const user = { name: "Alex" };
// const user2 = user;

// user.age = 18;
// user2.name = "Ivan";

// console.log(user);
// console.log(user2);

// const user = {name: "Alex"};

// const user2 = Object.assign({}, user);

// user.age = 18;
// user2.name = "Ivan";

// console.log(user);
// console.log(user2);

// const arr = [1, 2, 3];

// const arr2 = [...arr];

// arr.push(4);

// console.log(arr);
// console.log(arr2);

// const arr = [1, 2, 3, 4];

// const arrPush = (arr) => {
//     const newArr = [...arr];
//     newArr.push(5);
// }

// console.log(arr, 'one');
// arrPush(arr);
// console.log(arr, 'two');

// const arr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
// let arr2 = JSON.stringify(arr);
// console.log(arr2);
// arr2 = JSON.parse(arr2);
// console.log(arr2);

// const user = { name: "Alex", age: 18 };

// const user2 = JSON.parse(JSON.stringify(user));

// user.name = "Ivan";
// user2.age = 28;

// console.log(user);
// console.log(user2);

// const infinitySum = (...args) => {
//   return args.reduce((prev, cur) => prev + cur, 0);
// };

// console.log(infinitySum(1, 25, 3));

// const infinitySum = (a, b, ...args) => {
//   return a + b + args.reduce((prev, cur) => prev + cur, 0);
// };

// console.log(infinitySum(1, 25, 3, 5, 5, 6));

// const user = { name: "Alex", age: 18, city: "London" };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, "userName");
// console.log(userAge, "userAge");

// const { name, age} = user;
// console.log(name, "name");
// console.log(age, "age");

// const {name, ...restParams} = user;
// console.log(name, "name");
// console.log(restParams, "restParams");

// const arraySum = (arr) =>
// {
//     let result = 0;
//     for(let value of arr) {
//         result += value;
//     }
//     return result;
// }

// console.log(arraySum([1, 5, 6, 2, 4]));

// const arr = ["Alex", "Ivan", "Tony"];

// for (let value of arr) {
//   console.log(value);
// }

// for (let value in arr) {
//   console.log(value);
// }

// const obj = {name: "Alex", age: 18};

// for (let value in obj) {
//     console.log(value);
// }

// let DownByLaw = {director: "Jim Jarmush", year:1986, rate:7.8, money: 1435668};
// let DownByLaw2 = Object.assign({},DownByLaw);

// console.log(DownByLaw, DownByLaw2);

// delete DownByLaw2.rate;

// console.log(DownByLaw, DownByLaw2);

// let user = {name: "Peter", age: 19, city: "NN", heigth: 185};
// let newUser = {...user};

// console.log(user, newUser);

// newUser.weight = 88;

// console.log(user, newUser);


// function sum (...args) {
//     let result = 0;
//     for (let value of args) {
// if (value % 2 === 0) {
//     result += value;
// } continue;
//     }
//     return result;
// }

// console.log(sum(2, 6, 3, 1, 5, 3, 4));


function sameValue (arr1, arr2) {
    let newArr = [];
    for (let value of arr1) {
           for (let variable of arr2) {
if (value === variable) {
    newArr.push(value);  
} continue;
        }
    }
    return newArr;
}

console.log(sameValue([1, 2, 3, 5], [1, 3, 4, 2]));
console.log(sameValue([7, 2, 9, 5, 3, 6], [2, 9, 1, 7, 4, 6]));