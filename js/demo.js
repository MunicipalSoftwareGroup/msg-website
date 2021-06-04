function startDemo() {
	var slide = document.getElementById("slide");

	slide.src = "\\images\\slides\\0.png";
	openSlide(0);
	showDemo();
}

function showDemo() {
	var demo = document.getElementById("demo-container");

	if (demo.style.display != "flex") {
		demo.style.display = "flex";
	}
}

function checkClose(event) {
	var inner = document.getElementById("demo-container-inner");

	if (!inner.contains(event.target)) {
		hideDemo();
	}
}

function hideDemo() {
	var demo = document.getElementById("demo-container");

	if (demo.style.display != "none") {
		demo.style.display = "none";
	}
}

async function nextSlide() {
	var num = getCurrentSlide();
    
    openSlide(num + 1);
}

async function prevSlide() {
	var num = getCurrentSlide();
    var newNum = num - 1;
    
    openSlide(newNum);
}

async function openSlide(newNum) {
	var slide = document.getElementById("slide");
	var slides = await getSlides();

    var prevArrow = document.getElementById("prev-arrow"); 
    var nextArrow = document.getElementById("next-arrow");
    var finishButton = document.getElementById("finish-button");
	
    if (slides[newNum] === undefined) {
		return newNum;
	}
    else if (newNum === 0) {
        prevArrow.style.display = "none";
    }
    else if (newNum === 150) {
        nextArrow.style.display = "none";
        finishButton.style.display = "flex";
    }
    else {
        prevArrow.style.display = "flex";
        nextArrow.style.display = "flex";
        finishButton.style.direction = "flex";
    }
    
	setCurrentSlide(newNum);
	slide.src = getSlidesPath() + slides[newNum];
    
    if (newNum >= 0 && newNum < 27) {
        highlight("c1");
    }
    else if (newNum >= 27 && newNum < 47) {
        highlight("c2");
    }
    else if (newNum >= 47 && newNum < 52) {
        highlight("c3");
    }
    else if (newNum >= 52 && newNum < 59) {
        highlight("c4");
    }
    else if (newNum >= 59 && newNum < 78) {
        highlight("c5");
    }
    else if (newNum >= 78 && newNum < 95) {
        highlight("c6");
    }
    
	showDemo();
}

function getCurrentSlide() {
	var p = document.getElementById("current-slide");

	return parseInt(p.innerHTML, 10);
}

function setCurrentSlide(num) {
	var p = document.getElementById("current-slide");
	p.innerHTML = num;
    
    var slideNumber = document.getElementById("slide-number");
    
    slideNumber.textContent = parseInt(p.innerHTML) + 1 + "/151";
}

function getSlidesPath() {
	return "\\images\\slides\\";
}

async function getSlides() {
	return await $.getJSON("\\demo.json", null).then(function (json) {
		return json.slides;
	});
}

async function updateControls() {
    var controls = document.getElementsByClassName("tc-control");
    
//    highlight(id);
}

function highlight(id) {
    var controls = document.getElementsByClassName("tc-control");
    
    for (var i = 1; i <= 6; i++) {
        controls["c" + i].style.color = "#666";
    }

    document.getElementById(id).style.color = "white";
}
