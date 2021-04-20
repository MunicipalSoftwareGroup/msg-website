function highlight() {
    var body = document.body;
    var pos = window.scrollY;
    var items = document.getElementsByClassName("scroll-menu-item");
    var ourSoftware = document.getElementsByName("pitch-section")[0];
    var aboutUs = document.getElementsByName("about-us-section")[0];
    var contactUs = document.getElementsByName("contact-section")[0];
    var threshold = 100;
    if (pos >= ourSoftware.offsetTop - threshold && pos < aboutUs.offsetTop - threshold) {
        console.log("Our Software");
        items[1].style.color = "#FAC173";
        items[2].style.color = "#707070";
        items[3].style.color = "#707070";
    }
    else if (pos >= aboutUs.offsetTop - threshold && pos < contactUs.offsetTop - threshold) {
        console.log("About Us");
        items[1].style.color = "#707070";
        items[2].style.color = "#FAC173";
        items[3].style.color = "#707070";
    }
    else if (pos >= contactUs.offsetTop - threshold) {
        console.log(items[3]);
        items[1].style.color = "#707070";
        items[2].style.color = "#707070";
        items[3].style.color = "#FAC173";
    }
}