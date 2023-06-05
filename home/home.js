var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        //Scrolling up
        document.querySelector("header").classList.remove("hide");
    } else {
        //Scrolling down
        document.querySelector("header").classList.add("hide");
    }
    prevScrollPos = currentScrollPos;
    };