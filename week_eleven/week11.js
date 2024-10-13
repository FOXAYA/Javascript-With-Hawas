//Task 01
let member = {
    name :"Elzero",
    age : 38,
    country: "Egypt",
    fullDetails(){
          return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
    }
}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
console.log("*".repeat(80));



//Task02
// Method One
let objMethodOne = {
    property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = Object.create(objMethodOne);
objMethodTwo.property = "Methob Two";
console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.assign({property:"Method Three"});
console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.freeze({property: "Method Four"})

console.log(objMethodFour.property); // "Method Four"
console.log("*".repeat(80));



//Task03
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign(a,threeNums, twoNums)

console.log(finalObject);
console.log("*".repeat(80));



//Task04

// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },
    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
  };
  
  // Code One => How To Get Object Length ?
  let objectLength = Object.keys(myFavGames).length;
  console.log(objectLength)
  for (let i = 0; i < objectLength; i++) {
    
  let gameName = Object.keys(myFavGames)[i];
  let gameInfo = myFavGames[gameName];


    console.log(`The Game Name Is ${gameName}`);
    console.log(`The Publisher Is ${gameInfo.publisher}`);
    console.log(`The Price Is ${gameInfo.price}`);
  
    // Check If Nested Object Has Property (bestThree)
    if (gameInfo.bestThree) {
      console.log("- Game Has Releases");
      console.log(`First => ${gameInfo.bestThree.one}`);
      console.log(`Second => ${gameInfo.bestThree.two}`);
      console.log(`Third => ${gameInfo.bestThree.three}`);
    }
    console.log("#".repeat(20));
  }
  
  
  