var myNav = document.getElementById('nav');
var navs = document.getElementsByClassName('navItem')
var burger = document.getElementById('bars')
var className = 'displayNone'
var removeName;
function toggleBurger(element) {
    element.classList.toggle("change");
    if(className === 'displayNone'){
        className = 'displayBlock'
        removeName = 'displayNone'
    } else {
        className = 'displayNone'
        removeName = 'displayBlock'
    }
    for(var i = 0; i < navs.length; i++){
        navs[i].classList.add(className);
        navs[i].classList.remove(removeName);
    }
    
}
function setDisplayNone(){
    className = 'displayBlock'
    toggleBurger(burger)
}
document.addEventListener("DOMContentLoaded", function (event) {
    window.onscroll = function () {
        "use strict";
        if (document.scrollingElement.scrollTop >= 25) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
        } else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
        }
    };
});