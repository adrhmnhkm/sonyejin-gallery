var menu = document.getElementsByClassName("top-nav");
var nav = document.getElementsByClassName("bottom-nav");

menu.addEventListener("click", function(e){
    nav.classList.toggle("hide-mobile");
    e.preventDefault();
});

