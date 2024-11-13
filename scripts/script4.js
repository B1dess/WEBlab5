
function setBlockBorders(color) {
    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => {
        block.style.borderColor = color;
    });
}


function saveColorToLocalStorage(color) {
    localStorage.setItem("borderColor", color);
}


function loadColorFromLocalStorage() {
    return localStorage.getItem("borderColor");
}

document.addEventListener("DOMContentLoaded", () => {
    const savedColor = loadColorFromLocalStorage();
    if (savedColor) {
        setBlockBorders(savedColor);
        document.getElementById("colorInput").value = savedColor; // Встановлюємо значення у полі вводу
    }
});

window.addEventListener("focus", () => {
    const colorInput = document.getElementById("colorInput");
    const color = colorInput.value;
    if (color) {
        setBlockBorders(color);
        saveColorToLocalStorage(color);
    }
});

document.getElementById("colorInput").addEventListener("input", () => {
    const color = document.getElementById("colorInput").value;
    setBlockBorders(color);
    saveColorToLocalStorage(color);
});