filter("alles");

function filter(f) {
    var elements;
    var i;
    if (f == "alles") {
        elements = document.getElementsByClassName("inhoud");
        showElements(elements);
    } else {
        elements = document.getElementsByClassName("inhoud");
        hideElements(elements);

        elements = document.getElementsByClassName(f);
        showElements(elements);
    }
    
}

function showElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "inherit";
    }
}

function hideElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}