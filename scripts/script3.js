
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");

    for (let c of cookies) {
        while (c.charAt(0) === " ") c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
}

function findMinMax() {
    const input = document.getElementById("numberInput").value.trim();
    const numbers = input.split(" ").map(Number);

    if (numbers.length !== 10 || numbers.some(isNaN)) {
        alert("Введіть рівно 10 чисел, розділених комою.");
        return;
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    setCookie("min", min, 1); // Cookie for 1 day
    setCookie("max", max, 1);

    alert(`Мінімальне: ${min}, Максимальне: ${max}`);
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function checkCookiesOnLoad() {
    const min = getCookie("min");
    const max = getCookie("max");

    if (min && max) {
        document.getElementById("numberForm").style.display = "none"; // Hide the form
        setTimeout(function(){}, 5000)
        sleep(50).then(() => {
            if (confirm(`Збережені cookies:\nМінімальне: ${min}, Максимальне: ${max}\n\nВи хочете видалити ці cookies?`)) {
                deleteCookie("min");
                deleteCookie("max");
                alert("Cookies видалено. Сторінка перезагрузиться для введення нових даних.");
                location.reload();
            } else {
                alert("Cookies все ще збережені. Перезагрузіть сторінку щоб знову вивести це повідомлення.");
            }
        })
    }
}

window.onload = checkCookiesOnLoad;