//Task 01
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(100* 100); // 100000
console.log(1e5); // 100000
console.log(100000); // 100000
console.log(1e6 / 1e1); // 100000
console.log(Math.ceil(100000)); // 100000
console.log(Math.round(100000)); // 100000
console.log(Number(100000)); // 100000
console.log(100000.0); // 100000
console.log(parseInt(100000)); // 100000
console.log(10**5); // 100000
console.log("*".repeat(100));


//Task 02
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("*".repeat(100));


//Task 03
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
console.log("*".repeat(100));


//Task 04
let myVar = "100.56789 Views";
console.log(Number.parseInt(myVar)); // 100
console.log(+Number.parseFloat(myVar).toFixed(2)); // 100.57
console.log("*".repeat(100));


//Task 05
let num = 10;
console.log((Number.isInteger(num))+ (Number.isInteger(num))); // 2
console.log("*".repeat(100));


//Task 06
let flt = 10.4;
console.log(Math.ceil(flt) - true); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(flt.toFixed()); // 10
console.log("*".repeat(100));


//Task 07

console.log((Math.random() * 4).toFixed()); // 0 || 1 || 2 || 3 || 4
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
console.log("*".repeat(100));


//Task 01
let userName = "Elzero";


console.log(userName.slice(false, true).toLowerCase()); // e
console.log(userName.substr(false, true).toLowerCase()); // e
console.log(userName.charAt(false).toLowerCase()); // e
console.log(userName.slice(false, true).toLowerCase().repeat(true+true+true)); // eee
console.log("*".repeat(100));


//Task 02
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
console.log("*".repeat(100));


//challenge>>>>>>>>>>>>>>>>>>
/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(2,6).charAt(0).toUpperCase()+ a.slice(3,6)); // Zero

// 8 H
console.log(a.substr(-4,1).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.slice(0,6).split()); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0,6)}${a.substr(10)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
`${
   a.substring(0,1).toLowerCase()+
   a.substring(1,a.length-1).toUpperCase()+
   a.substring(a.length- 1).toLowerCase()
}`
); // eLZERO WEB SCHOOl
//  Elzero Web School