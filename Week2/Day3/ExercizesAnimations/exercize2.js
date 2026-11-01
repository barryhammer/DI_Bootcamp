
// Retrieve the button, container, and animated div
const btn = document.querySelector("button");
const container = document.getElementById("container");
const animateDiv = document.getElementById("animate");

let intervalId = null;

btn.addEventListener("click", () => {
    // Stop any previous animation
    if (intervalId !== null) {
        clearInterval(intervalId);
    }

    // Calculate max right position (container width - animateDiv width)
    const maxLeft = container.clientWidth - animateDiv.clientWidth;
    let pos = 0;

    // Reset the animated div to the starting position
    animateDiv.style.left = "0px";

    intervalId = setInterval(() => {
        if (pos >= maxLeft) {
            clearInterval(intervalId);
            intervalId = null;
        } else {
            pos++;
            animateDiv.style.left = pos + "px";
        }
    }, 1); // 1ms interval
});
