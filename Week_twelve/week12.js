//TAsk 01
{/* <div id="elzero" class="element" name="js">JavaScript</div> */}

let way1 = document.getElementById("elzero");
let way2 = document.querySelector("div");
let way3 = document.querySelectorAll("div");
let way4 = document.getElementsByClassName("element");
let way5 = document.querySelector(".elzero");
let way6 = document.getElementById("#elzero");
let way7 = document.querySelector("#elzero");
let way8 = document.querySelector(".elzero");
let way9 = document.getElementsByTagName("div");
let way10 = document.getElementsByName("js");
let way11 = document.querySelector("[name = js]")
console.log (way2)



//Task 02
let images  = document.querySelectorAll(".img1");

for (let i = 0;i<images.length;i++)
{
    images[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    images[i].setAttribute("alt", "Elzero Logo");
    
}


//Task 03
const exchangeRate = 15.6;


let input = document.querySelector("input[name='dollar']");
let result = document.querySelector(".result");
let form = document.querySelector("form");

function updateResult(){
     let dollar = parseFloat(input.value) || 0;
     let pound =  (exchangeRate * dollar).toFixed(2);

       result.innerHTML = `${dollar} USD Dollar = ${pound} Egyptian Pound`
}
input.addEventListener('input', updateResult);

input.addEventListener('paste', () => {
    setTimeout(() => {
        updateResult();
    }, 100); 
});



//task 04
let one = document.querySelector(".one");
let two = document.querySelector(".two");

let temp =  one.textContent;
one.textContent = two.textContent;
two.textContent = temp;

let attrtemp = one.getAttribute("title");
one.setAttribute("title",two.getAttribute("title"));
two.setAttribute("title", attrtemp)



//Task

document.addEventListener('DOMContentLoaded', function()
{
   const form = document.querySelector('form');
   form.addEventListener('submit', function(e)
{
    e.preventDefault(); // Prevent form submission
const typeSelect  =  document.querySelector("select");
const elementsInput =  document.querySelector('input[name="elements"]');
const textsInput = document.querySelector('input[ name="texts"]');
const resultsDiv = document.querySelector('.results');
   while(resultsDiv.firstChild){
    resultsDiv.removeChild(resultsDiv.firstChild);
   }

    // Create new elements
    for(let i = 0; i < parseInt(elementsInput.value); i++) {
      let element;
      if(typeSelect.value === 'Div') {
        element = document.createElement('div');
      } else {
        element = document.createElement('section');
      }
      element.textContent = textsInput.value;
      element.id = `id ${i+1}`;
      element.className = 'box';
      element.title = 'Element';

      resultsDiv.appendChild(element);
    }

});
});

