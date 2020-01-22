function toggleScrolling() {
    var body = document.body;
    
    if (body.style.position == "fixed") {
        console.log("fixed");
        body.style.position = "relative";
        body.style.overflowY = "auto";
    }
    else if (body.style.position == "relative" || body.style.position == "") {
        console.log("test");
        body.style.position = "fixed";
        body.style.overflowY = "hidden";
    } 
}