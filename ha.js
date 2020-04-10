var knap =document.querySelectorAll(".buttons button");
 
var Nete = document.getElementsByClassName("Nete")[0];

for (i=0; i<knap.length;i++){
    knap[i].addEventListener("click", manageHovedClasses);
}
function manageHovedClasses(){
    if(this.getAttribute("data-add")){
   Nete.classList.add(this.getAttribute("data-add"));
    }
    if(this.getAttribute("data-remove")){
   Nete.classList.remove(this.getAttribute("data-remove"));
    }
    
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 
    
}