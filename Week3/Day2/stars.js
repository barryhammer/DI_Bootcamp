let stars = 0;
let starArray = [];
let forStars = [];

while (stars < 5) {
    stars += 1;
    let newStars = "*".repeat(stars);
    starArray.push(newStars);
}

console.log(starArray.join("\n"));

for (let stars = 1; stars <= 5; stars++) {
    let newStars = "*".repeat(stars);
    forStars.push(newStars);
}

console.log(forStars.join("\n"));

const numbers = [1, 2, 3, 4, 5];
const starMaps = numbers.map(num => "*".repeat(num));
console.log(starMaps.join("\n"));