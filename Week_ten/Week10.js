//Task 01
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let newArr = mix.map(function(ele){
     return typeof ele === "string" ? ele : "" 
}).reduce(function(acc, curr){
    return `${acc}${curr}`;
});
// Elzero
console.log(newArr)
console.log("*".repeat(100));


//Task 02
let myString = "EElllzzzzzzzeroo";


let lettersArray = myString.split('');
let filterString = lettersArray.filter(function(ele,index, arr) {
   return arr[index] !== arr[index+1];
}).join("");

console.log(filterString)
// Elzero
console.log("*".repeat(100));


//Task 03
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let conarr = myArray.reduce(function(acc, curr){
     if (Array.isArray(curr)){
        return acc.concat(curr)
     }
     return acc.concat(curr);
}, []);
conarr = conarr.join("");
console.log(conarr)
// Elzero
console.log("*".repeat(100));


//Task 04
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numsOnly  = numsAndStrings.filter(function(ele){
    return !isNaN(parseInt(ele));
}).map(function(ele){
    return -ele;
});
console.log(numsOnly)// [-1, -10, 10, 20, -5, -3]
console.log("*".repeat(100));


//Task 05
let nums = [2, 12, 11, 5, 10, 1, 99];
let finalRes = nums.reduce(function(acc, curr){
      return curr % 2 ==+ 0 ? acc * curr : acc + curr ;   
},1);
console.log(finalRes)
// 500
 

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let my_String = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = my_String.split("").filter(function(ele, index, arr){
          return isNaN(parseInt(ele)) && ele !== "_" && ele !== ","  && arr[index] !== arr[index+1] && ele !== "Z" ;
}).reduce((acc, curr) => acc + curr , "");

console.log(solution); // Elzero Web School