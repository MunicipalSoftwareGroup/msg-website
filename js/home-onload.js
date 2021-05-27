window.onresize = function () {
    var infoContainer = document.getElementById("info-container");
    var splashContent = document.getElementById("splash-content");

    infoContainer.style.height = getComputedStyle(splashContent).height;
}