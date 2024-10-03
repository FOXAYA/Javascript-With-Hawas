//Task 01
console.log((10 * 20 + (15 % 3) + 190 + 10) % 400); // 0
console.log("*".repeat(100));



//Task 02
let num = 3;
console.log(num + num); // 6
console.log(num*num - num); // 6
console.log(num/num + num +(true + true)); // 6
console.log(num**num / (num) - num); // 6
console.log(num++ +  true + num++ - (true +true)); // 6
console.log(++num); // 6
console.log("*".repeat(100));



//Task 03
let num_1 = "10";
console.log(+num_1 + +num_1); // 20
console.log(Number(num_1) + Number(num_1)); // 20
console.log(+num_1 + Number(num_1)); // 20
console.log(num_1 *= true + true); // 20
console.log("*".repeat(100));



//Task 04
let points = 10;
let three= true+true+true;

points = points + three;
console.log(points); // 13

points = points - three - (true+true);
console.log(points); // 8;



console.log("*".repeat(100));



//Challenge>>>>>>>>>>>>>>>>>>>>
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); //11+20+80-11 = 100
/*
[++a]
- value : 11
- Explaint: prefix increment 

[+]
- Explain: Addition operatot

[+b++]
- vlue : 20
- Explaint: 
        [+]Unary Plus Trnasfer String to Number 
        [++]postfix increment 

[+]
- Explain: Addition operatot

[+c++]
- vlue : 80
- Explaint: 
        [+]Unary Plus Trnasfer String to Number 
        [++]postfix increment 

[-]
- Explain: subtraction operator

[+a++]
- vlue : 11
- Explaint: 
        [+]Unary Plus Trnasfer String to Number 
        [++]postfix increment 

*/
console.log(++a + -b + +c++ - -a++ + +a);
/*
[++a]
- Value: 11
- Explain: (++a) This is prefix increment
- [+] Explain: Addition Operator
[-b]
- Value: -20
- Explain: (-) This is Unary Negation Transfer String To Negative Number
- [+] Explain: Addition Operator
[+c++ ]
- Value: 80
- Explain: (+) This is Unary Plus Trnasfer String to Number 
          (c++) This is Postfix Increment
- [-] Explain: Subtraction Operator
[-a++]
- Value: -10
- Explain: (-) This is Unary Negation Trnasfer String to Negative Number
          (a++) This is Postfix Increment
- [+] Explain: Addition Operator
[+a]
- value: 10
- Explain: (+) This is Unary Plue Trnasfer String to Number 
*/

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[--c]
- value : 79
- Explaint: prefix decrement 

[+]
- Explain: Addition operatot

[+b]
- vlue : 20
- Explaint: 
        [+]Unary Plus Trnasfer String to Number 
  
[+]
- Explain: Addition operatot

[--a]
- vlue : 9
- Explaint: 
        [--]pretfix decrement 

[*]
- Explain: multipilcation operatot

[+b++]
- vlue : 20
- Explaint: 
        [+]Unary Plus Trnasfer String to Number 
        [++]postfix increment 

[-]
- Explain: subtraction operator

[+b]
- vlue : 20
- Explaint: 
        [+]Unary Plus Trnasfer String to Number 

[a]
- vlue : 10

[+]
- Explain: Addition operator

[--a]
- vlue : 9
- Explaint:  
        [--]postfix decrement 

[-]
- Explain: subtraction operator

[+true]
- value : 1
- Explain: 
            [+]unary operator 
            [true]bolean value = 1

*/



