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
    
    if (slides[newNum + 1] === undefined) {
        console.error("Slide is null");
        return;
    }
    
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
    
    if (slides[newNum] === undefined) {
        console.error("Slide is null");
        return;
    }
    
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
            "46": "19 Open Only.png",
            "47": "0RA.png",
            "48": "1RA.png",
            "49": "2RA.png",
            "50": "3RA.png",
            "51": "4RA.png",
            "52": "0T.png",
            "53": "1T.png",
            "54": "2T.png",
            "55": "3T.png",
            "56": "4T.png",
            "57": "5T.png",
            "58": "6T.png",
            "59": "0D.png",
            "60": "1D.png",
            "61": "2D.png",
            "62": "3D.png",
            "63": "4D.png",
            "64": "5D.png",
            "65": "6D.png",
            "66": "7D.png",
            "67": "8D.png",
            "68": "9D.png",
            "69": "10D.png",
            "70": "11D.png",
            "71": "12D.png",
            "72": "13D.png",
            "73": "14D.png",
            "74": "15D.png",
            "75": "16D.png",
            "76": "17D.png",
            "77": "18D.png",
            "78": "0P.png",
            "79": "1P.png",
            "80": "2P.png",
            "81": "3P.png",
            "82": "4P.png",
            "83": "5P.png",
            "84": "6P.png",            
            "85": "7P.png",            
            "86": "8P.png",
            "87": "9P.png",
            "88": "10P.png",
            "89": "11P.png",
            "90": "12P.png",
            "91": "13P.png",
            "92": "14P.png",
            "93": "15P.png",
            "94": "16P.png",
            "95": "17P.png"
        },

        "section": {
            "cases": "0"
        }
    }`);
}