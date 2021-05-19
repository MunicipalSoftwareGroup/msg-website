function startDemo() {
    var slide = document.getElementById("slide");
    
    slide.src = "images\\slides\\0.png";
    setCurrentSlide(0);
    showDemo();
}

function showDemo() {
    var demo = document.getElementById("demo-container");
    
    if (demo.style.display != "flex")
        demo.style.display = "flex";
}

function hideDemo() {
    var demo = document.getElementById("demo-container");
    
    if (demo.style.display != "none")
        demo.style.display = "none";
}

async function nextSlide() {
    var slide = document.getElementById("slide");
    var slides = await getSlides();
    slides.keys
    var num = getCurrentSlide();
    var newNum = num + 1;
    
    if (slides[newNum + 1] === undefined) {
        console.error("Slide is null");
        return;
    }
    
    slide.src = getSlidesPath() + slides[newNum];
    setCurrentSlide(newNum);
}

async function prevSlide() {
    var slide = document.getElementById("slide");
    var slides = await getSlides();
    var num = getCurrentSlide();
    var newNum = num - 1;
    
    if (newNum < 0)
        return;
    
    if (slides[newNum] === undefined) {
        console.error("Slide is null");
        return;
    }
    
    slide.src = getSlidesPath() + slides[newNum];
    setCurrentSlide(newNum);
}

async function openSlide(newNum) {
    var slide = document.getElementById("slide");
    var slides = await getSlides();
    var num = getCurrentSlide();
    
    slide.src = getSlidesPath() + slides[newNum];
    setCurrentSlide(newNum);
    showDemo();
}

function getCurrentSlide() {
    var p = document.getElementById("current-slide");
    
    return parseInt(p.innerHTML, 10);
}

function setCurrentSlide(num) {
    var p = document.getElementById("current-slide");
    p.innerHTML = num;
}

function getSlidesPath() {
    return "images\\slides\\";
}

async function getSlides() {
    return await $.getJSON("demo.json", null).then(function (json) { return json.slides });
}