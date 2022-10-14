// const total = 100;
// const min = 5; 
// let days = 0;
// let everyDayCars = total/2; 

// for (days; everyDayCars > min; days++) {
//   everyDayCars = everyDayCars /2;
//   console.log(everyDayCars);
// }
// console.log(days);

// while (carsEveryDay > finalNumber) {
//     carsEveryDay = carsEveryDay / 2; 
//     days++;
// }
// console.log(days);

// let i = 0;
// for (year = 1800; year < 2022; year++) {
//   if (year === 1961) {
//     console.log(`The first flight into outer space ${year}`);
//     break;
//   } else {
// i++;
//   }
// }
// console.log(i);

// let i=0;
// for(let year = 1800; year<2022; year++) {
//     if (year === 1961) {
//         console.log(`The first journey into outer space ${year}, ${i}`);
//     } else i++
// }

// let i = 0;
// let yearsValue = 0;
// for (year = 1800; year < 2022; year++) {
//   if (year % 4 === 0) {
//   console.log(year);  
// yearsValue++;
// i++;
//   } else {
// i++;
//   }
// }
// console.log(i);
// console.log(yearsValue);

// let a = -3; 
// if (a === 0) {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// let a = -3; 
// if (a > 0) {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// let a = -3; 
// if (a < 0) {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// let a = -3; 
// if (a >= 0) {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// let a = -3; 
// if (a <= 0) {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// let a = -3; 
// if (a != 0) {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// let a = 3; 
// if (a === 'test') {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// let a = '1'; 
// if (a === '1') {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// let test = ""; 
// if (!!test == true) {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// let test = 1; 
// if (!!test != true) {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// let a = 2; 
// if (a > 0 && a < 5) {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }


// let a = 2; 
// if (a === 0 || a === 2) {
//   console.log(a + 7);
// } else {
//   console.log(a / 10);
// }

// let a = 3; 
// let b = 5;
// if (a <= 1 && b >= 3) {
//   console.log(a + b);
// } else {
//   console.log(a - b);
// }

// let a = 4; 
// let b = 13;
// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//   console.log('Right');
// } else {
//   console.log('Wrong');
// }

// let num = 7; 
// switch (num) {
//   case 1:
//     console.log('Winter');
//     break;
//   case 2:
//     console.log('Spring');
//     break;
//   case 3:
//     console.log('Summer');
//     break;
//   case 4:
//     console.log('Autumn');
//     break;
//   default:
//     console.log("There're only 4 seasons in a year");
//     break;
// }

// let day = 36;
// if (day >=1 && day <=10) {
//   console.log('This is the first decade');
// } else if(day >= 11 && day <=20) {
//   console.log('This is the second decade');
// } else if(day >=21 && day <=31) {
//   console.log('This is the third decade');
// } else {
//   console.log('This number is too much')
// }

// let month = 2;
// if (month == 1 || month == 2 || month == 12) {
//   console.log('This is winter');
// } else if(month >= 3 && month <= 5) {
//   console.log('This is spring');
// } else if(month >= 6 && month <= 8) {
//   console.log('This is summer');
// } else if(month >= 9 && month <=11) {
//   console.log('This is autumn');
// } else {
//   console.log('This number is too much')
// }

// let string = prompt('Введите строку');
// if (string[0] === 'a') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// let string = '1234';
// if(string[0] == 1 || string[0] == 2 || string[0] == 3) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// let string = prompt('Введите 3-х значное число');
// if(string === null) {
//   console.log("You haven't written any number");
// } else if(string.length === 3) {
//   console.log(+string[0] + +string[1] + +string[2]);
// } else if(string.length < 3) {
//   console.log('The number is too short');
// } else if(string.length > 3) {
//   console.log('The number is too long');
// }

// let string = prompt('Введите 6 цифр');
// if(string === null) {
//   console.log("You haven't written any number");
// } else if((+string[0] + +string[1] + +string[2]) === (+string[3] + +string[4] + +string[5])) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// let i = 1;
// while (i<=100) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// for(;i<=100;i++) {
//   console.log(i);
// }

// let i = 11;
// while (i<=33) {
//   console.log(i);
//   i++;
// }

// let i = 11;
// for(;i<=33;i++) {
//   console.log(i);
// }

// let i = 0;
// while(i<=100) {
// if(i % 2 === 0) {
// console.log(i);
// i++;
// } else i++;
// }

// let i = 0;
// for(;i<=100;i++) {
// if(i % 2 === 0) {
// console.log(i);
// } else continue;
// }

// let i = 1;
// let sum = 0;
// while(i<=100) {
// sum = sum + i;
// console.log(sum);
//   i++;
// }

// let i = 1;
// let sum = 0;
// for(;i<=100;i++) {
// sum = sum + i;
// console.log(sum);
// }

// let arr = [1, 2, 3, 4, 5];
// for(i=0; i<arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for(i=0; i<arr.length; i++) {
// result = result + arr[i];
// }
// console.log(result);

// let arr = [2, 5, 9, 15, 0, 4];
// for(i=0; i<arr.length; i++) {
// if (arr[i] > 3 && arr[i] < 10) {
// console.log(arr[i]);
// } else continue;
// }

// let arr = [2, -5, 9, -15, 0, 4, -1, 20];
// let sum = 0;
// for(i=0; i<arr.length; i++) {
// if (arr[i] > 0) {
// sum = sum + arr[i];
// } else continue;
// }
// console.log(sum);

// let arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for(i=0; i<arr.length; i++) {
// if (arr[i] === 4) {
// console.log('Есть!');
//   break;
// } else continue;
// }

// let arr = [10, 20, 30, 50, 235, 3000];
// let symbol;
// for(i=0; i<arr.length; i++) {
// symbol = String(arr[i]).charAt(0);
// if (symbol == 1 || symbol == 2 || symbol == 5) {
//   console.log(arr[i]);
// } else continue;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let symbol;
// let result = "";
// for(i=0; i<arr.length; i++) {
// symbol = String(arr[i]);
// result = result+"-"+symbol;
// }
// console.log(result);

// const n = 1000;
// let i = 1;
// let num = n/2;

// for(; num>50; i++) {
//   num = num/2;
// } 
// console.log(i);
// console.log(num);

