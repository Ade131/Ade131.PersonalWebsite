window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

var prevScrollPos = window.pageYOffset;
var header = document.querySelector("header");

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
    } else if (currentScrollPos > 200) {
        //Scrolling down
        header.classList.add("shadow")
        header.classList.add("hide");
    }
    prevScrollPos = currentScrollPos;
    };