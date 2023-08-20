const clock = document.querySelector('h2#clock');

function updateClock() {
    const date = new Date();
    clock.innerText = `${date.getHours().toString().padStart(2, "0")}`
        + `:${String(date.getMinutes()).padStart(2, "0")}`
        + `:${date.getSeconds().toString().padStart(2, "0")}`;
}

setInterval(updateClock, 1000);