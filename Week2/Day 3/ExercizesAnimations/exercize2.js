const btn = document.getElementByType("button");
const container = document.getElementById("container");
const animateDiv = document.getElementById("animate");

btn.addEventListener("click", () => {
    // Calculate max right position (container width - animateDiv width)
    const maxLeft = container.clientWidth - animateDiv.clientWidth;
    let pos = 0;

    const intervalId = setInterval(() => {
    if (pos >= maxLeft) {
        clearInterval(intervalId);
    } else {
        pos++;
        animateDiv.style.left = pos + "px";
    }
    }, 1); // 1ms interval
});