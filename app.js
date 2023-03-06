// menu

const menu = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");
const menuClose = document.querySelector("#menu-close");


 function showMenu() {
   menu.style.display = "block";
   hamburger.style.display = "none";
 }

 hamburger.addEventListener('click', showMenu);


function hideMenu() {
 if (menu.style.display === "block"){
 menu.style.display = "none";
 hamburger.style.display = "block";
}
}

menuClose.addEventListener('click', hideMenu);

// pet policy

const petPopUp = document.querySelector("#pet-pop-up");
const petLink = document.querySelector(".pet-link");
const petClose = document.querySelector(".close");


 function showPet() {
   petPopUp.style.display = "block";
 }

 petLink.addEventListener('click', showPet);


function hidePopUp() {
 if (petPopUp.style.display === "block"){
  petPopUp.style.display = "none";}
}

petClose.addEventListener('click', hidePopUp);

  