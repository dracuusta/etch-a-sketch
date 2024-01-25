container=document.getElementById('container');
let n=16;
var setRandomColor=0;

let buttonDiv=document.getElementById('button');
let rainbowButtonDiv=document.getElementById('rainbow-button');

function toggleBit(){
   if(setRandomColor==1)
   {
    setRandomColor=0;
   }
   else{
    setRandomColor=1;
   }
}
rainbowButtonDiv.addEventListener('click',toggleBit);



function generateGrid(n){
    let containerDiv="<div class='Grid'>";
    for(let row=0;row<n;row++)
{
    let rowDiv="<div class='flex-row'>";
    for(let cell=0;cell<n;cell++)
    {
        let cellDiv="<div class='grid-item'>";
       cellDiv+="</div>";
       rowDiv+=cellDiv;
    }
    rowDiv+="</div>";
    containerDiv+=rowDiv;
}
    containerDiv+="</div>";
    container.innerHTML=containerDiv;
    attachEventListener();
}


function attachEventListener(){
    let gridElements=document.querySelectorAll('.grid-item');

gridElements.forEach(s => s.addEventListener('mouseover', () =>{
    let color=setRandomBackGroundColor();
    s.style.backgroundColor = setRandomColor ? color : '#000';

}))};


                                           

generateGrid(16);

function setRandomBackGroundColor(){
    let randomColor="#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    return randomColor;
}

function resetDivs(){
    let gridElements=document.querySelectorAll('.grid-item');
    gridElements.forEach((element)=>{
        element.style.backgroundColor='#fff';
    })    
}




function gridValue() { 
    let n= parseInt(prompt("Enter the N value for the NxN grid", "16")); 
    generateGrid(n);
 }  