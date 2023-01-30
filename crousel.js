
const rightbtn=document.getElementById("carousel__button--next");
const leftbtn=document.getElementById("carousel__button--prev");
const item=document.getElementsByClassName("carousel__item");
//const images=document.querySelector(".images");
let count=0;

const totalslides=item.length;
 console.log("sd"+totalslides);
rightbtn.addEventListener('click',showright);
leftbtn.addEventListener('click',showleft);

function showslides(){
    for(const slides of item){
        slides.classList.remove('carousel__item--visible');
        slides.classList.add('carousel__item--hidden');
        
    }
    item[count].classList.add('carousel__item--visible');
}
function showright()
 {
    
   if(count>=totalslides-1)
   {
    count=0;
   }
   else{
    count++;
   }
  
   
  showslides();
 }



 function showleft()
 {
     if(count===0){
        count=totalslides-1;
        
     }
    else{
        count--;
    }
     
    showslides();
  
 }

