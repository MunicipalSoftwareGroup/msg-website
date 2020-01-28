function closeMenu() {
    var cb = document.getElementById("burger-input");
    if (cb.checked) {
        cb.checked = false;
        toggleMenu();
    }
}