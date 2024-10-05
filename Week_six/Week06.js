//Task 01

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];
console.log(myFriends.splice(false, num)); // ["Ahmed", "Elham", "Osama"];
console.log("*".repeat(100));
console.log(myFriends)
console.log("*".repeat(100));



//Task02
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop();
friends.shift()
console.log(friends); // ["Eman", "Osama"]
console.log("*".repeat(100));
console.log("*".repeat(100));



//Task03
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
console.log("*".repeat(100));



//Task04
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let len_1 = website.length;
console.log(words[len_1][0].slice(len_1).toUpperCase()); // ZERO
console.log("*".repeat(100));



//Task05
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle))
{
  console.log("Found");
}
if (haystack.some((ele) => ele > needle))
{
  console.log("Found");

}
if (haystack.indexOf(needle, 1))
  {
    console.log("Found");
  
  }
  if (haystack.find((ele) => ele > needle))
    {
      console.log("Found");
    
    }
    console.log("*".repeat(100));



    //Task06
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
allArrs = (arr1.concat(arr2).sort().slice(arr1.length+true).join('').toLowerCase());
console.log(allArrs); // fxy
console.log("*".repeat(100));

//challenge >>>>>>>>>>>>>>
/*
  Array Challenge
*/

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my = my.slice(zero,++counter ).reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

console.log(my[zero].slice(--zero, --counter).concat(my[counter].slice(counter))); // "Elzero"
console.log(my[counter].slice(-counter,-true).concat(my[counter].slice(++counter + counter -true,).toUpperCase())); // "rO"



