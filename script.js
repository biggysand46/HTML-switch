function toggle() {
    button = document.getElementById("btn");
    if (button.classList[1] != "active") {
        button.classList.add("active");
    } else {
        button.classList.remove("active");
    }
}