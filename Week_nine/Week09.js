//Task 01
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
         const name = zName.split(' ');
         const firstn = name[0];
         const lastn = name[1][0].toUpperCase();
        return (`${firstn} ${lastn}.`)
    }
    function ageWithMessage(zAge) {
         const age = zAge.match(/\d+/)[0];
         return `Your Age IS ${age} `

    }
    function countryTwoLetters(zCountry) {
          const country = zCountry.slice(0,2).toUpperCase();
         return `You Live In ${country}`
    }
    function fullDetails() {
       const username  = namePattern(zName);
       const userAge = ageWithMessage(zAge);
       const usercountry = countryTwoLetters(zCountry);

       return `Hello ${username}${userAge}${usercountry}`;
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY
console.log("*".repeat(80));




//Task02

// function itsMe() {
//   return `Iam A Normal Function`;
// }
//   console.log(itsMe()); // Iam A Normal Function
const its = ()=> `Iam A Arrow Function`;
console.log(its()); // Iam A Arrow Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

urlCreate = (protocol, web, tld)=> `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
console.log("*".repeat(80));



//Task 03

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

const checker = (zName) => (status) => (salary) => 
  status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
 console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
 console.log("*".repeat(80));




//Task04
function specialMix(...data) {
  let result = 0;
  for (let i = 0; i< data.length;i++){
    if (Number.isInteger(parseInt(data[i])) === true)
    {
      result += parseInt(data[i]);
    }
  }
    if (result === 0) {
      return `All Is Strings`;
    }
    return result;
  }

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
console.log("*".repeat(80));




//Arrow Function Challenge
/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = function (...args) {
    return `String [${args.join("], [")}] => Done !`;
};
//to Arrow
/*
let names = (...args) => {
    return `String [${args.join("], [")}] => Done !`;
};
*/
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one +  two + nums.reduce((acc, curr) => acc + curr ,0)
console.log(calc(10, -70, ...myNumbers)); // 80