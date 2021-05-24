window.onload = function () {
    
    // Close burger menu when link is clicked
    var menuItems = document.getElementsByClassName("burger-link");
    
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", closeMenu);
    }
    
    var checkbox = document.getElementById("burger-input");
    
    checkbox.addEventListener("change", toggleMenu);
    
    window.addEventListener("resize", function() {
        if (document.documentElement.clientWidth >= 992) {
            closeMenu();
        }
    }, false);
}

window.onresize = function () {
    var infoContainer = document.getElementById("info-container");
    var splashContent = document.getElementById("splash-content");

    infoContainer.style.height = getComputedStyle(splashContent).height;
}