// const person = {
//   name: "ALex",
// };

// person.age = 56;
// person["city-name"] = "NN";

// console.log(person);

// let key = "firstName";

// let people = {
//   [key]: "Ivan",
// };

// console.log(people);

// console.log(person.name);
// console.log(person["city-name"]);

// console.log(person.age);

// person.age = "26";

// console.log(person.age);

// console.log(person.height);
// person.height = 193;
// console.log(person.height);

// delete person.height;
// console.log(person.height);

// let user = {
//   sayHello: function () {
//     console.log("Hi");
//   },
// };

// user.sayHello();

// const sayHello = function () {
//   console.log("Hi");
// };

// user.hello = sayHello;
// user.hello();

// let myFavFilm = {
//   name: "Moonrise Kingdom",
//   year: 2012,
//   director: "Wes Anderson",
//   country: "USA",
// };

// console.log(myFavFilm);

// myFavFilm.money = "$68 263 166";

// console.log(myFavFilm);

// let title = function () {
//   console.log("Moonrise Kingdom");
// };

// myFavFilm.title = title;

// myFavFilm.title();

// delete myFavFilm.year;

// console.log(myFavFilm);

// const number = 100;
// console.log(typeof number.toString());
// console.log(number.toString());

// const str = "hello world";
// str[0] = "H";
// console.log(str);
// console.log(str[0]);

// let str = "Widget with id";

// console.log(str.indexOf("o"));
// console.log(str.indexOf("id"));
// console.log(str.indexOf("id", 2));

// let str = "Widget with id";

// console.log(str.includes("Widget"));
// console.log(str.includes("ololo"));

// let str = "Widget with id";

// console.log(str.slice(1, 6));
// console.log(str.substr(2, 8));
// console.log(str.substring(1, 6));

// function reg(str, n) {
//   if (str[n] > str[n].toUpperCase()) {
//     return false;
//   }
//   return true;
// }

// console.log(reg("Hello", 0));
// console.log(reg("HeLlO", 1));
// console.log(reg("poNd", 3));

// function findReplace(str, find, replace) {
//   let newStr = str.toLowerCase();
//   newStr = newStr.replaceAll(find, replace);
//   console.log(newStr);
// }

// findReplace("Около околицы молоко водится", "око", "оло");

function random(min, max) {
  let result = min + Math.random() * (max - min);
  return Math.round(result);
}

console.log(random(4, 10));
