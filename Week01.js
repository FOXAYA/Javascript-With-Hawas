// Task 01

/*
Code one won't work because its tries to change color
    before the html element loded in the dom
Code Three won't work because the same issue it is placed in the body
    before  the dom excuted fully

*/
console.log("*".repeat(100));

//Task 02
console.log("%cElzero", "color:blue; font-size: 80px;font-weight: bold; text-align: center;font-family: Arial");
console.log("*".repeat(100));

//Task 03
console.log(
    "%cElzero %cweb %cSchool",
    "color: red; font-size: 40px;",
    "color: green; font-weight: bold; font-size: 40px",
    "color: white; background: blue; font-size: 40px; padding: 4px;"
  );
  console.log("*".repeat(100));

//Task 04
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group Two");
console.log("Message One");
console.log("Message Two");
console.log("*".repeat(100));

//Task 05
console.table(["Elzero", "Ahmed", "Sameh", "Gamal","Aya" ]);
console.log("*".repeat(100));


//Task 06
//The way to disable code multiple comment
/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
