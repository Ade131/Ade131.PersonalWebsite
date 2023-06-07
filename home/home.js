/*
 * Set position to top when reloading
 */
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

/*
 * Animated page load
 */
document.addEventListener("DOMContentLoaded", function() {
    //Fade in header
    const header = document.querySelector(".header");
    header.classList.add("fade-in");

    //Fade in nav items
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(function(navItem, index) {
        setTimeout(function() {
            navItem.classList.add("fade-in", "slide-down");
        }, index * 150); //delay
    });

    //Fade in intro section
    const introSections = document.querySelectorAll(".intro-content > div");
    introSections.forEach(function(div, index) {
        setTimeout(function() {
            div.classList.add("fade-in");
            div.classList.add("slide-up");
        }, 600 + index * 100) //Delay
    })

    //Fade in links
    const socialContent = document.querySelector(".socials");
    const emailContent = document.querySelector(".email");
    setTimeout(function() {
        socialContent.classList.add("fade-in");
        emailContent.classList.add("fade-in");
    }, 700);

    //Fade in arrow
    const arrowWrapper = document.querySelector(".arrow-wrapper");
    setTimeout(function() {
        arrowWrapper.classList.add("fade-in");
    }, 2500); //delay
});

/*
 * Animate in sections as scroll down
 */
//Check if section is in viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var topThreshold = windowHeight * 0.2; // 20% of the window height
  
    return (
      rect.top <= windowHeight - topThreshold &&
      rect.bottom >= topThreshold
    );
  }

//Fade in sections as they appear in viewport
function fadeInSectionsOnScroll() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        if (isElementInViewport(section)) {
            section.classList.add("fade-in");
            section.classList.add("slide-up");
        }
    });
}

// Add event listener to window scroll event
window.addEventListener("scroll", fadeInSectionsOnScroll);

/*
 * Header hide/show when scrolling
 * & Fading out scroll prompt arrows
 */
var prevScrollPos = window.pageYOffset;
const header = document.querySelector(".header");
const arrows = document.querySelector(".arrow-wrapper");

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
    } else if (currentScrollPos > 170) {
        //Scrolling down
        header.classList.add("shadow")
        header.classList.add("hide");
        arrows.classList.add("arrow-fade-out");
        arrows.classList.remove("fade-in")
    }
    prevScrollPos = currentScrollPos;
    };

/*
 * Hamburger menu logic
 */ 
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".hamburger-overlay");
const navMenu = document.querySelector(".nav-menu");
const content = document.querySelector(".content");
const body = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);
body.addEventListener("click", closeMenuOutside);

//When menu is opened
function mobileMenu() {
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");
    navMenu.classList.toggle("active");
    content.classList.toggle("blur");
    //Disable scrolling when menu is open
    if (content.classList.contains("blur")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
}

//Close burger menu when user clicks outside the menu box
function closeMenuOutside(event) {
    if (
        content.classList.contains("blur") &&
        !navMenu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        //Click occurred outside the menu box
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
        content.classList.remove("blur");
        body.style.overflow = "";
    }
}

/*
 * Close burger menu when option selected
 */ 
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    content.classList.remove("blur");
    body.style.overflow = "";
}
  