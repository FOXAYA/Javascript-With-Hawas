//Task 01
console.log(100 !== "100"); // true
console.log(100 < 1000); // true
console.log(110  > 100 > 10 < 20); // true
console.log(! -50  >= +"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(+ "10" === 10); // true
console.log(+ 20 > false); // true
console.log("*".repeat(100));


//Task 02
let num___1 = 10;
let num___2 = 20;

console.log(num___1 < num___2); // true
console.log(num___1 != num___2); // true
console.log(num___1 <= num___2); // true
console.log(num___2 >= num___1); // true
console.log(num___2 > num___1 ); // true
console.log(!(num___1 > num___2)); // true
console.log("*".repeat(100));


//Task 03
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a != b); // true
console.log(a <= b || a >= c); // true
console.log(!(a > b) && !(a == b) && !(a < c) && !(a <= c)); // true
console.log("*".repeat(100));


//Task 01
/*
let num = 20; // "020"
let num = 110; // "110"
*/
let num = 10; // "009"

if(num < 10 ){
  console.log(`00${num}`)
}
else if(num > 10 && num < 100){
  console.log(`0${num}`)
}
else
{
  console.log(`${num}`)
}
console.log("*".repeat(100));


//Task 02
let num_1 = 9;
let str = "9";
let str2 = "20";
  
if (num_1 == str)
{
  console.log("{num1} Is The Same Value As {str}")
}
if (num_1 == str)
{
  console.log("{num1} Is The Same Value As {str} But Not The Same Type")
}
if(num_1 !== str2)
{
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
}
if (typeof str == typeof str2)
  {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value")
  }
  console.log("*".repeat(100));


//Task 03
let num__1 = 10;
let num__2 = 30;
let num__3 = "30";

if (num__3 > num__1 && typeof num__3 !== typeof num__1){
  console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}
if (num__3 > num__1 && num__3 == num__2 && typeof num__3 !=  typeof num__2){
   console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}
if(num__3 !== num_1 && typeof num__3 !== typeof num__1 && typeof num__3 !== typeof num__2){
  console.log(`${num__3} Value And Type Is Not The Same As ${num__1} And Type Is Not The Same As ${num__2}`)
}
console.log("*".repeat(100));


//Task 04
let num1 = 10;
let num2 = 1;
let num3 = 10;
let num4 = 40 ;


// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
console.log("*".repeat(100));



//Task 01
let day = "   friday  ";
day = day.trim()[0].toUpperCase() + day.trim().slice(1);

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log(`No Appointments Available`);
    break;
  case "Monday":
  case "Thursday":
    console.log(`From 10:00 AM To 5:00 PM`);
    break;
  case "Tuesday":
    console.log(`From 10:00 AM To 6:00 PM`);
    break;
  case "Wednesday":
    console.log(`From 10:00 AM To 7:00 PM`);
    break;
  default:
    console.log(`Its Not A Valid Day`);
}
console.log("*".repeat(100));


///challenge >>>>>>>>>>>>>.
/*
  Switch Challenge To If
*/
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }


let job = "";
let salary = 0;
switch (job)
{
  case "Manager":
    salary = 8000;
    break;
    case  "IT" || "Support":
    salary = 6000;
    break;
    case "Developer" || "Designer":
    salary = 7000;
    break;
    default:
      salary = 4000;

}



/*
  if Challenge To switch
*/
let holidays = 0,
 money = 0;
  if(holidays === 0){
    money = 5000;
    console.log(`My Money is ${money}`);
  }
  else if (holidays === 1 || holidays === 2)
  {
    money = 3000;
  console.log(`My Money is ${money}`);

  }
  else if (holidays === 3 )
    {
    money = 2000;
    console.log(`My Money is ${money}`);
    
    }
    else if (holidays === 4 )
      {
      money = 1000;
      console.log(`My Money is ${money}`);
      
      }
      else if (holidays === 5 )
        {
        money = 0;
        console.log(`My Money is ${money}`);
        
        }
        else {
          money = 0;
          console.log(`My Money is ${money}`);
        }
        
    

//switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }