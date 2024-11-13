
const div1 = document.getElementById("div1");
const imageForm = document.getElementById("imageForm");
const imageUrlInput = document.getElementById("imageUrl");
const addImageButton = document.getElementById("addImageButton");
const clearImagesButton = document.getElementById("clearImagesButton");

document.addEventListener("selectionchange", () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    const isTextSelectedInY = selection.anchorNode && selection.anchorNode.parentElement.id === "y";

    if (selectedText && isTextSelectedInY) {
        imageForm.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const savedImages = JSON.parse(localStorage.getItem("images")) || [];
    savedImages.forEach(url => addImageToDiv1(url));
});

addImageButton.addEventListener("click", () => {
    const url = imageUrlInput.value;
    if (url) {
        addImageToDiv1(url);
        saveImageToLocalStorage(url);
        imageUrlInput.value = "";
    } else {
        alert("Введіть URL зображення.");
    }
});

clearImagesButton.addEventListener("click", () => {
    localStorage.removeItem("images");
    div1.innerHTML = "<p>Lorem ipsum</p>\n" +
        "                <ol>\n" +
        "                    <li>dolor sit </li>\n" +
        "                    <li>amet, consectetur</li>\n" +
        "                    <li>adipisicing elit</li>\n" +
        "                    <li>amet, consectetur</li>\n" +
        "                    <li>dolor sit</li>\n" +
        "                </ol>\n" +
        "                <br>\n" +
        "                <p>Сторінки</p>\n" +
        "                <ul>\n" +
        "                    <li><a href=\"index.html\">Головна сторінка <<<</a></li>\n" +
        "                    <li><a href=\"pages/page1.html\">Сторінка 1</a></li>\n" +
        "                    <li><a href=\"pages/page2.html\">Сторінка 2</a></li>\n" +
        "                    <li><a href=\"pages/page3.html\">Сторінка 3</a></li>\n" +
        "                    <li><a href=\"pages/page4.html\">Сторінка 4</a></li>\n" +
        "                    <li><a href=\"flexbox/index_flexbox.html\">Flexbox CSS</a></li>\n" +
        "                    <li><a href=\"grid/index_grid.html\">Grid CSS</a></li>\n" +
        "                    <li><a href=\"plain/index_plain.html\">Plain</a></li>\n" +
        "                    <li><a href=\"email/index_email.html\">E-mail</a></li>\n" +
        "                </ul>";
});

function addImageToDiv1(url) {
    const img = document.createElement("img");
    img.src = url;
    img.style.width = "90%";
    img.style.marginTop = "5px";
    div1.appendChild(img);
}

function saveImageToLocalStorage(url) {
    const savedImages = JSON.parse(localStorage.getItem("images")) || [];
    savedImages.push(url);
    localStorage.setItem("images", JSON.stringify(savedImages));
}