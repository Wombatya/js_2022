// Задача 1
// function stringToArray(str) {
//   let arr = [];
//   arr = str.split(" ");
//   console.log(arr);
// }

// stringToArray("mother father sister brother");

// Задача 2
// function deleteCharacters(str, length) {
//   let newStr = str.substr(0, length);
//   console.log(newStr);
// }

// deleteCharacters("Мама мыла раму", 6);

// Задача 3
// function insertDash(str) {
//   str = str.toUpperCase();
//   str = str.replaceAll(" ", "-");
//   console.log(str);
// }

// insertDash("Привет с большого бодуна");

// Задача 4
// function changeRegister(str) {
//   if (str[0] === str[0].toUpperCase()) {
//     return str;
//   } else {
//     str = str.replace(str[0], str[0].toUpperCase());
//     return str;
//   }
// }

// console.log(changeRegister("Hello"));
// console.log(changeRegister("hello"));

// Задача 5
// function capitilize(str) {
//   let arr = str.split(" ");
//   let result;
//   for (i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
//     result = arr.join(" ");
//   }
//   return result;
// }

// console.log(capitilize("Каждый охотник желает знать где сидит фазан"));
// console.log(capitilize("What does the fox say?"));

// Задача 6
// function changeRegister(str) {
//   for (i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       str = str.replace(str[i], str[i].toLowerCase());
//     }
//     str = str.replace(str[i], str[i].toUpperCase());
//   }
//   return str;
// }

// console.log(changeRegister("window"));
// console.log(changeRegister("EvErY cLoUd HaS a SiLvEr LiNinG"));

// Задача 7
// function charAt(str) {
//   let char = [
//     "`",
//     "~",
//     "!",
//     "@",
//     "#",
//     "$",
//     "%",
//     "^",
//     "&",
//     "*",
//     "(",
//     ")",
//     "-",
//     "_",
//     "+",
//     "=",
//     "{",
//     "}",
//     "[",
//     "]",
//     "|",
//     "/",
//     "<",
//     ">",
//     ".",
//     ",",
//     "?",
//     "№",
//     ";",
//     ":",
//   ];
//   for (let i = 0; i < str.length; i++) {
//     outer: for (let o = 0; o < char.length; o++) {
//       if (str[i] === char[o]) {
//         str = str.replace(str[i], " ");
//         break outer;
//       }
//       continue;
//     }
//   }
//   for (let x = 0; x < str.length; x++) {
//     if (isNaN(str[x])) {
//       continue;
//     }
//     str = str.replace(str[x], " ");
//   }
//   console.log(str);
// }

// charAt("14gj%f@tg...fglk345)&%");

// Задача 8
// function zeroes(num, length) {
//   newNum = num.toString();
//   while (newNum.length < length) {
//     newNum = newNum + 0;
//   }
//   return newNum;
// }

// console.log(zeroes(20, 6));

// Задача 9
// function comparison (str1, str2) {
//     if (str1.toLowerCase() === str2.toLowerCase()) {
//       console.log(str1)
//       return `The strings are equal`;
//     } else if (str1.toLowerCase() > str2.toLowerCase()) {
//       return `The first string is bigger`;
//     } return `The second string is bigger`;
//   }

//   console.log(comparison("Hello everyone", "Hello everyone"));

//   console.log(comparison("Hi everyone", "Hello everyone"));

//   console.log(comparison("Hello everybody", "Hello everyone"));

// Задача 10
// function insensitiveSearch(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();
//   console.log(str1.indexOf(str2));
// }

// insensitiveSearch("Туча мглою небо кроет вихри снежные крутя", "кроет");

// insensitiveSearch("Туча мглою небо кроет вихри снежные крутя", "НЕБО");

// insensitiveSearch("Туча мглою небо кроет вихри снежные крутя", "ТуЧа");

// Задача 11
// function initCap(str) {
//   let arr = str.split(" ");
//   let result;
//   for (i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
//     result = arr.join("");
//   }
//   return result;
// }

// console.log(initCap("Я знаю только то, что ничего не знаю"));

// Задача 12
// function initSnake (str) {
//   let arr = [0];
//   let newArr = [];
//   for (let i = 0; i<str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       arr.push(i);
//     } continue;
//   }
//   console.log(arr);
//   for (let i = 0; i<arr.length; i++) {
//     if (i+1 === arr.length) {
//       newArr.push(str.substr(arr[i], str.length -arr[i]));
//     }
//     newArr.push(str.substr(arr[i], arr[i+1]-arr[i]));
//   }
//   let result = newArr.join("_");
// result = result.trim().toLowerCase();
// console.log(result);
// }

// initSnake("onToGoneBecomePeople");

// function initSnake (str) {
// let result = "";
//   for (let i = 0; i<str.length; i++) {
//     if (str[i].toUpperCase() === str[i] && i !== 0) {
//       result += _${str[i].toLowerCase()};
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

// console.log(initSnake("allWorkAndNoPlayMakesJackADullBoy"));

// Задача 13
// function repeatStr(str, n) {
//   for (let i = 0; i < n; i++) {
//     console.log(str);
//   }
// }

// repeatStr("Во поле берёза стояла", 7);
// repeatStr("Полюшко-поле", 3);

// Задача 14
// function path(pathname) {
//   let arr = pathname.split("/");
//   console.log(arr[arr.length - 1]);
// }

// path("/.ewgwefrge/.wegtrrew/.wegret");

// Задача 15
// function endsWith(str, str1) {
//   let end = str1.length;
//   let toCompare = str.substr(str.length - end, str1.length);
//   if (toCompare === str1) {
//     return true;
//   }
//   return false;
// }

// console.log(endsWith("привет", "ет"));
// console.log(endsWith("привет", "вет"));
// console.log(endsWith("привет", "при"));

// Задача 16
// function getSubStr(str, char, pos = "after") {
//   let position = str.indexOf(char);
//   console.log(position);
//   if (pos === "before") {
//     return str.substring(0, position);
//   } else if (pos === "after") {
//     return str.substring(position + 1, str.length);
//   }
// }

// console.log(getSubStr("привет", "в", "before"));
// console.log(getSubStr("привет", "в"));

// Задача 17
// function insert(str, substr, pos = 1) {
//   return str.replace(str[pos - 1], substr);
// }

// console.log(insert("бить", "п"));
// console.log(insert("корова", "н", 5));

// Задача 18
// function limitStr(str, n, symb = "...") {
//   let newStr = str.substr(0, n + 1);
//   return `${newStr}${symb}`;
// }

// console.log(limitStr("Кто ходит в гости по утрам, тот поступае'т мудро", 30));
// console.log(limitStr("Куда ни глянь - резвится лань", 10, "###"));

// Задача 19
// function count(str, stringsearch) {
//   let result = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === stringsearch) {
//       result += 1;
//     }
//   }
//   return result;
// }

// console.log(count("На дворе трава на траве дрова", "а"));

// Задача 20
// function strip (str) {
//   return str = str.trim().replaceAll("  ", " ");
//  }

//  console.log(strip("    fdgkjdf flkjg         lkgrjre  flkgvrkgl    "));

//  function space (str) {
//   let result = "";
//    for (let i = 0; i<str.length; i++) {
//      if (str[i] === " " && str[i-1] !== " ") {
//        result += str[i];
//      }
//      if (str[i] !== " ") {
//        result += str[i];
//      }
//    }
//    return result;
//  }

//  console.log(space("dffgbf rgr    gerg gergr     ergergher eer   ergrgegr"));

// Задача 21
// function cutString(str, n) {
//   let arr = str.split(" ");
//   let newArr = [];
//   for (let i = 0; i < n; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr.join(" ");
// }

// console.log(cutString("Куда идем мы с пятачком большой большой секрет.", 5));


// Задача 22 
function findWord (str, word) {
  return str.includes(word);
}

console.log(findWord("Мороз и солнце день чудесный", "день"));
console.log(findWord("Мороз и солнце день чудесный", "лень"));