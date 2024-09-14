let nav =document.querySelector(".navigation-wrap")
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on")
    }
}

let navbar = document.querySelector(".nav-link");
let navCollaps = document.querySelector(".navbar-collaps.collapse");
navbar.forEach(function (a){
    a.addEventListener("click",function(){
        navCollaps.classList.remove("show");

    })
})