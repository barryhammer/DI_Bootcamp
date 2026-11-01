function calculateSphereVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

const myForm = document.getElementById("MyForm");

myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const radiusInput = document.getElementById("radius").value;
    const radius = parseFloat(radiusInput);

    if (!Number.isFinite(radius)) {
        alert("Please enter a valid number for the radius.");
        return;
    }

    if (radius < 0) {
        alert("Radius cannot be negative.");
        return;
    }

    const volume = calculateSphereVolume(radius);

    // Update final number to page.
    document.getElementById("volume").value = volume;
});