document.addEventListener("DOMContentLoaded", function () {

const mobileBtn=document.querySelector(".mobile-menu-btn");
const navLinks=document.querySelector(".nav-links");

if(mobileBtn){
mobileBtn.addEventListener("click",function(){
navLinks.classList.toggle("active");
});
}

});
