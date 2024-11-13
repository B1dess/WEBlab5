
function diamondArea(d1, d2) {
    const area = (d1 * d2) / 2;
    document.getElementById("diamondResult").textContent = `Площа ромба: ${area}`;
}

diamondArea(10, 20);