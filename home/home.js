//Set position to top when reloading
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

//Header hide/show when scrolling
var prevScrollPos = window.pageYOffset;
const header = document.querySelector(".header");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 100) {
        //At the top of the page
        header.classList.remove("shadow");
        header.classList.remove("hide");
    }

    if (prevScrollPos > currentScrollPos) {
        //Scrolling up
        header.classList.remove("hide");
    } else if (currentScrollPos > 100) {
        //Scrolling down
        header.classList.add("shadow")
        header.classList.add("hide");
    }
    prevScrollPos = currentScrollPos;
    };

//Hamburger menu logic
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const content = document.querySelector(".content");
const body = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);
body.addEventListener("click", closeMenuOutside);

//When menu is opened
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    content.classList.toggle("blur");
    //Disable scrolling when menu is open
    if (content.classList.contains("blur")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
}

//Close menu when user clicks outside the menu box
function closeMenuOutside(event) {
    if (
        content.classList.contains("blur") &&
        !navMenu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        //Click occurred outside the menu box
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        content.classList.remove("blur");
        body.style.overflow = "";
    }
}

//Close menu when option selected
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    content.classList.remove("blur");
    body.style.overflow = "";
}
  