function startDemo() {
    var slide = document.getElementById("slide");
    
    slide.src = "images\\slides\\0.png";
    
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
    var num = (slide.src.split('\\').pop().split('/').pop().split('.'))[0];
    var newNum = parseInt(num, 10) + 1;
    
    slide.src = slide.src.replace(slides[num], slides[newNum]);
}

function prevSlide() {
    var slide = document.getElementById("slide");
    var slides = getSlides().slides;
    var num = (slide.src.split('\\').pop().split('/').pop().split('.'))[0];
    var newNum = parseInt(num, 10) - 1;
    
    if (newNum < 0)
        return;
    
    slide.src = slide.src.replace(slides[num], slides[newNum]);
}

function openSlide(newNum) {
    var slide = document.getElementById("slide");
    var slides = getSlides().slides;
    var num = (slide.src.split('\\').pop().split('/').pop().split('.'))[0];
    slide.src = slide.src.replace(slides[num], slides[newNum]);
    
    showDemo();
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
            "26": "26.png"        
        },

        "section": {
            "cases": "0"
        }
    }`);
}