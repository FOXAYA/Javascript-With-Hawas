let  parent  = document.querySelector(".parent");

let addChild = document.querySelector("#add-child");
addChild.addEventListener("click", ()=>{
     if (parent.childNodes.length > 1){
        return;
     }
    const child = document.createElement("div");
     child.textContent = ('child');
     child.classList.add('child');
     parent.appendChild(child);    
});


let removeChild = document.getElementById("remove-child");
removeChild.addEventListener("click",()=>{
    const child  = document.querySelector(".child");
    if (child) {
        parent.removeChild(child); // Pass the actual child element
    }
})


let cr_table =  document.querySelector('#creat-table');
let tbl ;
cr_table.addEventListener("click" ,() => {
   if(!tbl){
     tbl = document.createElement("table");
    const tblbody = document.createElement('tbody');

    for (let i=0; i < 5 ;i++){
        const row =document.createElement('tr');

    for (let j=0; j < 5 ;j++){
        const ceill =document.createElement('td');

    const ceillText  =  document.createTextNode(`ceil in row ${i} ceil in col ${j}`)
    

    ceill.appendChild(ceillText);
    row.appendChild(ceill);
    }
  tblbody.appendChild(row);
}

tbl.appendChild(tblbody);
document.body.appendChild(tbl)
tbl.setAttribute("border", 3)
}
});


let remove_tbl = document.getElementById("remove-table");

remove_tbl.addEventListener("onblur", () => {
    if (tbl) {
        tbl.remove();
        tbl = null; // Reset the tbl variable
    }
});


let btnColor = document.querySelector("#p-color");
let par = document.querySelectorAll("p");

   let secPar = par[1];


   btnColor.addEventListener("click", ()=>{

   secPar.style.backgroundColor = "red";
   secPar.style.width = "200px"
   secPar.style.height = "200px";

   });





