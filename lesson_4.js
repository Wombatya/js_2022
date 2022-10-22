// function showMessage(message) {
// console.log(`${message}`);
// }

// showMessage ('Hi');
// showMessage('Привет');
// showMessage('Hello');
// showMessage ('Как дела?');

// function sum(a, b = 0) {
//   console.log(a + b);
// }
// sum(2, 3);
// sum(2);

// function sum(a = 0, b) {
//   return a + b;
// }
// const result = sum(3, 5);
// console.log(result);
// console.log(sum(4, 6));

// function positiveSum(a, b) {
//   if (a > 0 && b > 0) {
//     return a + b;
//   }
//   return "Ошибка вычисления";
// }

// console.log(positiveSum(2, 3));
// console.log(positiveSum(-2, 3));

// function getName() {
//     const userName = "Alex";
// return userName;
// }

// function getUsername() {
//     console.log(userName);
// }

// console.log(getName());
// console.log(getUserName());

// const sayHello = function (name) {
//   console.log(`Hello, ${name}`);
// };


// const funcExample = function (callback) {
//   for (let i = 0; i<1000000000; i++) {}
//   callback("Alex");
// };

// funcExample(sayHello);

// sum(1, 2);

// function sum (a, b) {
//   console.log(a+b);
// }

// result(5, 2);

// let result = function (a, b) {
//   console.log(a+b);
// }

// const name = "Alex";
// function sayHello(message = "Hello!") {
//     const name = "Ivan";
//     console.log(`${message} - ${name}`);
// }
// sayHello();
// sayHello("Привет");

// function sum(a, b = 3) {
//   const result = a + b;
//   a += 1;
//   console.log(result);
// }
// sum(2);
// sum(2);

// function sayHello(name = "Guest") {
//     console.log(`Hello ${name}`);
// }
// sayHello();
// sayHello('Vasya');

// function raiseToDegree (a, b = 1) {
//     console.log(a**b);
// }
// raiseToDegree(2);
// raiseToDegree(2,2);

// function  getArithmeticAverage(Array) {
//     let sum = 0;
//     for(i=0; i<Array.length; i++) {
// sum = sum + Array[i];
//     }
//     console.log(sum/Array.length);
// }
// getArithmeticAverage([1,2,3]);
// getArithmeticAverage([5,3]);

// const sayHello = function greeting (name) {
//     console.log(`Hello ${name}`);
// };

// console.log()

// const getName = (name) => `Name - ${name}`;

// console.log(getName("Alex"));
// console.log(getName("Ivan"));

// const getNameTwo = (name) => {
//     return `Name - ${name}`;
// };

// console.log(getNameTwo("Alex"));

// const number = (a) => a ** 2;
// console.log(number(3));

// const output = (message, n) => {
//     for(i=0; i<n; i++) {
//         console.log(message);
//     }
// };

// output("Hello", 5);

// const isVowel = (letter) => {
//   let arr = ["a", "e", "i", "o", "u", "y"];
//   for (i = 0; i < arr.length; i++) {
//     if (letter === arr[i]) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(isVowel("n"));

const palindrome = (word) => {
  let newWord = "";
  for (let i = 1; i <= word.length; i++) {
    newWord = newWord + word[word.length - i];
  }
  if (newWord === word) {
    return true;
  } return false;
};
console.log(palindrome("дед"));

