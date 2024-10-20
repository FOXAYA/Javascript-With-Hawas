// // // function getListStudents(){
// // //      pass
// // // }


// // // console.log(getListStudents());
// // let colore = ["red", "yellow","blue" ];
// // colore[5] = "purple";
// // // colore.forEach((item, index)=>{
// // //        console.log(`${index} => ${item}`);
// // // });
// // // console.log(colore)
// // // console.log(colore.length);

// // // const iterator  = colore.keys();
// // // for (const key of iterator)
// // // {
// // //    console.log(`${key} ${colore[key]} `)
// // // }

// // // const newColors = colore.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']
// // // console.log(newColors);
// // // 

// // function getListStudents() {
// //      return [
// //        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
// //        { id: 2, firstName: 'James', location: 'Columbia' },
// //        { id: 5, firstName: 'Serena', location: 'San Francisco' }
// //      ];
// //    }
// //    const getListStudentIds = (students) =>{
// //     if (!Array.isArray(students))
// //     {
// //       return []
// //     }
// //     return students.map(students => students.id);
// //    }
 



// //    function getStudentsByLocation(students, city){
// //       return students.filter((obj)=> obj.location === city  )
// //    }

// //   function getStudentIdsSum(students)
// //   {
// //       return students.reduce((acc, cur) => acc + cur.id, 0);
// //   }

// //   function updateStudentGradeByCity(listStudents, city, newGrades) {
// //     const students = listStudents.filter((student) => student.location === city);
// //     for (const student of students) {
// //       student.grade = 'N/A';
// //     }
// //     const newStudents = students.map((student) => {
// //       const single = student;
// //       for (const grade of newGrades) {
// //         if (single.id === grade.studentId) {
// //           single.grade = grade.grade;
// //         }
// //       }
// //       return single;
// //     });
// //     return newStudents;
// //   }


// //   function createInt8TypedArray(length, position, value) {
// //     const arr = new ArrayBuffer(length);
// //     const val = new DataView(arr);
  
// //     try {
// //       val.setInt8(position, value);
// //     } catch (e) {
// //       throw Error('Position outside range');
// //     }
// //     return val;
// //   }
// // const students = getListStudents();
// // console.log(students);
// // console.log(getListStudentIds());
// // console.log(getListStudentIds(getListStudents()));
// // console.log("******************************");
// // console.log(getStudentsByLocation(students, 'San Francisco'));
// // console.log("******************************");
// // const value = getStudentIdsSum(students);
// // console.log(value);
// // console.log("******************************");
// // console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));
// // console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
// // console.log("******************************");
// // console.log(createInt8TypedArray(10, 2, 89));


// let arr = [1,2,3,5, 8];

// const callfun = arr.map(function(ele,index, arr){
//      return ele + ele;
// },);

// console.log(callfun)

// // let invertNum = [-1,-10,2,3,-4, 5,-6];
// // let ignoreBolean = "Elz123er40";

// let swappedCase = "FOXaya";
// let sw = swappedCase.split("").map(function(ele){
//     return ele === ele.toUpperCase() ? ele.toLowerCase(): ele.toUpperCase();
// }).join("");

// let filt  = swappedCase.split("").filter(function(ele){
//     if (ele === ele.toUpperCase()){
//         return ele;
//     }
// }).join("");


// console.log(sw);//foxAYA
// console.log(filt);//FOx //return true test values


// // let inv = invertNum.map(function(ele){
// //   return -ele;
// // });
// // console.log(inv);



// let sentence = "I Love FOOOOd code TOO  playing Much"

// let words = sentence.split(" ").filter(function(word){
//      return word.length <= 4;
// }).join("  ");

// console.log(words)

// let Mix = "A13BS2ZX3";
// let multiNums = Mix.split("").filter(function(ele){
//     return !isNaN(parseInt(ele));
// }).map((ele) => ele + ele).join("*");
// console.log(multiNums)


// let theLongest = ["Bla", "Ela", "propagand", "fox" , "thur", "test"];
// let removechar = ["E", "@", "@","L","Z","@","@","E","R","@", "o" ];

// let check = theLongest.reduce(function(acc,curr){
//          return `${acc.length >  curr.length ? acc : curr}`
// });
// let elzero = removechar.filter(function(ele){
//     return !ele.startsWith("@")
// }).reduce((acc,curr) => `${acc}${curr}`);
// console.log(check);
// console.log(elzero);


