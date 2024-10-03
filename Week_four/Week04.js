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