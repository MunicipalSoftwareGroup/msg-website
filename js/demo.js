function showDemo() {
    var demo = document.getElementById("demo-container");
    
    if (demo.style.display != "grid")
        demo.style.display = "grid";
}

function hideDemo() {
var demo = document.getElementById("demo-container");
    
    if (demo.style.display != "none")
        demo.style.display = "none";
}

function nextSlide() {
    var slide = document.getElementById("slide");
    
    var num = (slide.src.split('\\').pop().split('/').pop().split('.'))[0];
    var newNum = parseInt(num, 10) + 1;
    
    slide.src = slide.src.replace(num + ".png", newNum + ".png");
}

function prevSlide() {
    var slide = document.getElementById("slide");
    
    var num = (slide.src.split('\\').pop().split('/').pop().split('.'))[0];
    var newNum = parseInt(num, 10) - 1;
    
    if (newNum < 0)
        return;
    
    slide.src = slide.src.replace(num + ".png", newNum + ".png");
}

function openSlide(newNum) {
    var slide = document.getElementById("slide");
    
    var num = (slide.src.split('\\').pop().split('/').pop().split('.'))[0];
    slide.src = slide.src.replace(num + ".png", newNum + ".png");
    
    showDemo();
}