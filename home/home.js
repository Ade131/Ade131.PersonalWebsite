var prevScrollPos = window.pageYOffset;
var header = document.querySelector("header");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        //Scrolling up
            header.classList.remove("hide");
    } else if (currentScrollPos > 200) {
        //Scrolling down
        header.classList.add("hide");
    }
    prevScrollPos = currentScrollPos;
    };