function closeTip() {
    var tipBox = document.getElementById("tip-box");
    
    tipBox.style.transition = "height 0.5s ease-in-out, opacity 0.25s ease-in-out";
    tipBox.style.height = "0";
    tipBox.style.opacity = "0";
    
    var newsBox = document.getElementById("news-box");
    
    newsBox.style.transition = "height 0.75s";
    newsBox.style.height = "100%";
}