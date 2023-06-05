window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

//Header hide/show
var prevScrollPos = window.pageYOffset;
var header = document.querySelector("header");
var scrollUpThreshold = 10;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 100) {
        //At the top of page
        header.classList.remove("shadow");
        header.classList.remove("hide");
    }

    if (prevScrollPos > currentScrollPos) {
        //Scrolling up
        header.classList.remove("hide");
    } else if (currentScrollPos > 150) {
        //Scrolling down
        header.classList.add("shadow")
        header.classList.add("hide");
    }
    prevScrollPos = currentScrollPos;
    };