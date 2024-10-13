//Task 01
function sayHello(theName, theGender) {
  if (theGender === "Male"){
     console.log(`Hello Mr ${theName}`)
  } else if (theGender === "Female"){
    console.log(`Hello Miss ${theName}`)
  } else{
    console.log(`Hello ${theName}`)
}
}

sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
console.log("*".repeat(100));





//Task 02
function calculate(firstNum, secondNum, operation) {
  if (secondNum == undefined && operation == undefined)
     {
      return ` Second Number Not Found`
     }
  if (operation == 'add'){
     return `${firstNum +  secondNum}`
    }else if (operation == 'subtract'){
      return `${firstNum -  secondNum}`
    }else if (operation == 'multiply'){
      return `${firstNum *  secondNum}`
     } else {
      return `${firstNum + secondNum}`
  }
}

console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, 'add')); // 50
console.log(calculate(20, 30, 'subtract')); // -10
console.log(calculate(20, 30, 'multiply')); // 600
console.log("*".repeat(100));





//Task 03
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge} Years`);
    console.log(`${theAge * 12}  Months`);
    console.log(`${theAge * 12 * 4}  Weeks`);
    console.log(`${theAge * 12 * 30} Days`);
    console.log(`${theAge * 12 * 30 * 24} Hours`);
    console.log(`${theAge * 12 * 30 * 24 * 60} Minutes`);
    console.log(`${theAge * 12 * 30 * 24 * 60 * 60} Seconds`);
  } else {
    console.log(`Age Out Of Range`);
  }
}
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
console.log("*".repeat(100));





//Task 04
function checkStatus(a, b, c) {
 let arr = [a,b,c];
 let first, second, third;
 for (let i = 0; i< arr.length;i++){
  if(typeof arr[i] == "string"){
       first = arr[i];
  }else if(typeof arr[i]== "number"){
     second = arr[i];
  }
  else if(typeof arr[i]== "boolean"){
      if (arr[i] === true)
      { 
        third = "You Are Available For Hire"
      }
      else {
        third = "You Are Not Available For Hire"
      }

   }
  }
  console.log(`Hello ${first}, Your Age Is ${second}, ${third}`)

}
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
console.log("*".repeat(100));





//Task 05
function createSelectBox(startYear, endYear) {
document.write(`<select>`);
for (let i = startYear; i<= endYear; i++){
    document.write(`<option value = ${i}>${i}</option>`)
  }
  document.write(`</select>`);

}
createSelectBox(2000, 2021);
console.log("*".repeat(100));





//Task 06
function multiply(...numbers){
  let result = 1;
     for(let i = 0;i<numbers.length;i++){
      if (typeof numbers[i] === "number"){
          result *= Math.trunc(numbers[i]);
      }else{
        continue;
      }
    }
    return  result;

}
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
console.log("*".repeat(100));





//Task 07