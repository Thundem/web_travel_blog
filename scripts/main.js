function toggleElements(id) {
    var id = document.getElementById(id);
    if (id.style.display === "none") {
        id.style.display = "block";
    } else {
        id.style.display = "none";
    }
}