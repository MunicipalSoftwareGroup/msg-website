function openPopup(feature) {
    // Disable background scrolling
    var body  = document.body;
    
    body.style.height = "100%";
    body.style.overflowY = "hidden";
    
    // Show overlay and load image
    var img = document.getElementById(feature.id + "-image");
    var popup = document.getElementById("feature-popup");
    var popupImg = document.getElementById(popup.id + "-image");
    
    popupImg.src = img.src;
    
    console.log(popupImg);
    
    if (popup.style.display != "block")
        popup.style.display = "block";
}
        
function closePopup() {
    // Re-enable scrolling
    var body = document.body;
        
    body.style.height = "auto";
    body.style.overflowY = "scroll";
    
    // Hide overlay
    var popup = document.getElementById("feature-popup");
    
    // Scroll back to the top of the overlay
    popup.scrollTop = 0;
    
    if (popup.style.display != "none")
        popup.style.display = "none";
}
    