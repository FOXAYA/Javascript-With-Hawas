//Task 01
let start = 10;
let end = 100;
let exclude = 40;


for (let i = start; i <= end ; i+=start){
  if (i === exclude){ 
      continue;
  }
  else
  {
    console.log(i)
  }
}
console.log("*".repeat(100));




//Task 02
let start_1 = 10;
let end_1 = 0;
let stop_1 = 3;


for (let i = start_1; i >= stop_1; i-= true){
     if (i === start_1 ){
console.log(`${start_1}`)
  }else{
      console.log(`${end_1}${i}`)
  }
}
console.log("*".repeat(100));




//Task 03
let start_2 = 1;
let end_2 = 6;
let breaker = 2;


for (let i = start_2; i<end_2;i++ )
{
  console.log(`${i}`);
  console.log(`-- ${breaker}`);
  console.log(`-- ${end_2 - breaker}`);
}
console.log("*".repeat(100));




//Task 04
let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
   if (index === jump * jump) break;
  index -= jump;
}
console.log("*".repeat(100));




//Task 05
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let length = letter.length;
//  for (let i = 0; i <= friends.length; i++){
//       if (friends[i].startsWith(letter.toUpperCase()) == true){
//         continue;}
//             console.log(`${length++}=> ${friends[i]}`)
//  }
//  console.log("*".repeat(100));




 //Task 06
 let start_3 = 0;
let swappedName = "elZerO";
let swappedName2 = swappedName.toUpperCase();
let End = " ";
for (let i = start_3; i<swappedName.length ;i++)
 
    if(swappedName[i] === swappedName2[i]){
       End += swappedName[i].toLowerCase();
    }else{       
      End += swappedName[i].toUpperCase();

    }

console.log(End);
console.log("*".repeat(100));




//Task 07
let start_4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start_4; i < mix.length;i++)
{
  if (typeof mix[i] === "string")
    continue;
  if ( mix[i] === mix[start_4])
    continue;
  else
  {
    console.log(mix[i])
  }
}
console.log("*".repeat(100));




//Task 01
let friends_1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index_ = 0;
let counter = 0;


while (counter < friends_1.length - index.toString().length) {
  counter++;
  if (typeof friends_1[counter] == "number" ||friends_1[counter].charAt(0) == "A")
    continue;
  console.log(friends_1[counter]);
}