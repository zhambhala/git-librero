const menuUl = document.querySelector(".headerNav-menuUl");
const openMenuBtn = document.querySelector(".openMenu");
const closeMenuBtn = document.querySelector(".closeMenu");
function toggleMenu(){
    menuUl.classList.toggle("menuOpened");
};

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);