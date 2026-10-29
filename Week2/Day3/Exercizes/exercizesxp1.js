// Using a DOM property, retrieve the h1 and console.log it.
let myH1 = document.querySelector("h1");
console.log(myH1);

// Using DOM methods, remove the last paragraph in the <article> tag.
let lastP = parent.querySelectorAll('article.p').at(-1);

// Use if statement to prevent JavaScript runtime errors.
if (lastP) {
    lastP.remove();
}

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
h2.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'red'; 
});

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
h3.addEventListener('click', function (event) {
    event.target.style.display = "none";
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs bold.
const button = document.createElement('button');

button.addEventListener('click', () => {
   const boldP = document.querySelectorAll('p');
   elements.forEach(element => {
    element.style.fontWeight = "bold"; 
   });
  });

document.getElementById('article').appendChild(button)