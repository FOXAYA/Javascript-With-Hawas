let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];// Elzero
let word = mix.map((ele)=> typeof(ele)=== "string" ?ele : "").reduce(function(acc, curr){
      return `${acc}${curr}`
});
console.log(word);


//Task 02
let myString = "EElllzzzzzzzeroo";// // Elzero
let uniqWord = myString.split("").filter(function(ele, index, arr){
      return arr[index] !== arr[index+1];
}).join('');
console.log(uniqWord);
//arrow function
/**
 * uniqWord = myString.split("").filter((ele, index, arr) => arr[index] !== arr[index+1]).join('');
 * 
 */



//Task 03
let elzeroArr = ["E", "l", "z", ["e", "r"], "o"];
 let faltArr = elzeroArr.reduce((acc, curr)=> acc.concat(curr), [ ]).join("");
 console.log(faltArr)
// Elzero


//Task 04
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numsOnly = numsAndStrings.filter((ele)=> !isNaN(parseInt(ele))).map((ele)=>-ele)
console.log(numsOnly)
// [-1, -10, 10, 20, -5, -3]


//Task 05
let nums = [2, 12, 11, 5, 10, 1, 99];// 500
let addOrMul = nums.reduce((acc, cur)=>cur % 2 == 0 ?  acc * cur : acc +  cur, 1);
console.log(addOrMul);

//Challenge

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

let myString_2 = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString_2.split('').
map((ele)=>isNaN(parseInt(ele)) ? ele : "").
filter((ele, index, arr)=> isNaN(parseInt(ele))&& ele !== "" && ele !== "_" && ele !== "," && arr[index] !== arr[index+1] && ele !== "Z").
reduce((acc, curr) => acc + curr + " ")
console.log(solution); // Elzero We b School