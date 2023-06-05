var prevScrollPos = window.pageYOffset;
var header = document.querySelector("header");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        //Scrolling up
        if (currentScrollPos < 600) {
            //If user is near the top of the page
            header.classList.remove("hide");
        }
    } else if (currentScrollPos > 300) {
        //Scrolling down
        header.classList.add("hide");
    }
    prevScrollPos = currentScrollPos;
    };