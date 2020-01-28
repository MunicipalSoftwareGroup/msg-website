function toggleMenu() {
    var body = document.body;
    var burger = document.getElementById("burger");
    
    // Menu should close
    if (body.style.position == "fixed") {
        body.style.position = "relative";
        body.style.overflowY = "auto";
        
        /*burger.style.left = "unset";
        burger.style.right = "0";
        burger.style.transform = "translate(-50%, 0);"*/
    }
    // Menu should open
    else if (body.style.position == "relative" || body.style.position == "") {
        body.style.position = "fixed";
        body.style.overflowY = "hidden";
        
        /*burger.style.left = "-15px";
        burger.style.right = "unset";
        burger.style.transform = "translate(-50%, 0);"*/
    } 
}