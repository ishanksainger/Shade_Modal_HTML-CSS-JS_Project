var active=document.querySelector('.sharedModal')
var overlay=document.querySelector('.overlay');
const showmodal=()=>{
    console.log("HI");
    active.classList.add("active");
    overlay.classList.add("remove");
}
const closedmodal=()=>{
    overlay.classList.remove("remove");
    active.classList.remove("active");
}
overlay.addEventListener('click',closedmodal);