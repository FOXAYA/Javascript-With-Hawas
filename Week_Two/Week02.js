//Task 01

let NumberOne = "10",
    NumberTwo = "20";
// Ouput
console.log(NumberOne + "" + NumberTwo); // Normal Concatenate => 1020
console.log(typeof(NumberOne)); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(`${typeof(NumberOne)}`); // Template Literals Way => String

console.log(NumberTwo + "\n" + NumberOne);
/*
  Normal Concatenate
  20
  10
*/
console.log(`${NumberTwo}
${NumberOne}`);
/*
  Template Literals Way
  20
  10
*/
console.log("*".repeat(100));


//Task 02
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
console.log("*".repeat(100));


//Task 03
console.log('I \'m In'+"\n"+'\\\\'+"\n" + "Love" + "\\\\" + "\"\"\" \'\'\'" +"\n" + "\+\+ with \+\+" + "\n" + "\\\\\"\"\"".repeat(2)+"\n"+"\"\"Javascript\"\"")
console.log("*".repeat(100));


//Task 04
let a = 21;
let b = 20;
let c = b+""+a+"_";
console.log(`_${21}_${c.repeat(3)}_${b}_`);// _21_2021_2021_2021_20_
console.log("*".repeat(100));


//Challenge>>>>>>>>>>>>>>>>>>>>//
let userTitle = "Elzero" ,
    userDesc = "Elzero Web School",
    userDate = "25 / 10";
    userInfo = 
   `<div >
      <h3>${userTitle}</h3>
      <p>${userDesc}</p>
      <span>${userDate}</span>
      <h1 style= "color:red">${"#".repeat(30)}</h1>
   </div>
   `
   document.write(userInfo.repeat(4));