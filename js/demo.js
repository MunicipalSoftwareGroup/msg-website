function startDemo() {
    var slide = document.getElementById("slide");
    
    slide.src = "images\\slides\\0.png";
    setCurrentSlide(0);
    showDemo();
}

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
    var slides = getSlides().slides;
    slides.keys
    var num = getCurrentSlide();
    var newNum = num + 1;
    
    slide.src = getSlidesPath() + slides[newNum];
    setCurrentSlide(newNum);
}

function prevSlide() {
    var slide = document.getElementById("slide");
    var slides = getSlides().slides;
    var num = getCurrentSlide();
    var newNum = num - 1;
    
    if (newNum < 0)
        return;
    
    slide.src = getSlidesPath() + slides[newNum];
    setCurrentSlide(newNum);
}

function openSlide(newNum) {
    var slide = document.getElementById("slide");
    var slides = getSlides().slides;
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

function getSlides() {
    return JSON.parse(`{
        "slides": {
            "0": "0.png",
            "1": "1.png",
            "2": "2.png",
            "3": "3.png",
            "4": "4.png",
            "5": "5.png",
            "6": "6.png",
            "7": "7.png",
            "8": "8.png",
            "9": "9.png",
            "10": "10.png",
            "11": "11.png",
            "12": "12.png",
            "13": "13.png",
            "14": "14.png",
            "15": "15.png",
            "16": "16.png",
            "17": "17.png",
            "18": "18.png",
            "19": "19.png",
            "20": "20.png",
            "21": "21.png",
            "22": "22.png",
            "23": "23.png",
            "24": "24.png",
            "25": "25.png",
            "26": "26.png",
            "27": "Notes 2 Bumper.png",
            "28": "1 Clicking Search Button.png",
            "29": "2 Opening Search window.png",
            "30": "3 Search by Case Number.png",
            "31": "4 Executing Search.png",
            "32": "5 Clicking Case Number result.png",
            "33": "6 Opening Case from Results 1.png",
            "34": "7 Search by Name.png",
            "35": "8 Click name result.png",
            "36": "9 Open Case from Results 2.png",
            "37": "10 Date.png",
            "38": "11 Open case by date.png",
            "39": "12 Opening case by date.png",
            "40": "13 search by UTC.png",
            "41": "14 Open UTC.png",
            "42": "15 Opening UTC.png",
            "43": "16 Partial Name.png",
            "44": "17 Location.png",
            "45": "18 Filters.png",
            "46": "19 Open Only.png"
        },

        "section": {
            "cases": "0"
        }
    }`);
}