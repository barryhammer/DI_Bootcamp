// Exercise 1 : HTML Form

const form = document.querySelector("#userinfo");

async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});

// Exercise 2 : HTML Form #2

// Exercise 3 : JSON Mario
const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

// Convert the JavaScript object to JSON
const jsonString = JSON.stringify(marioGame);
console.log(jsonString);

// Convert to formatted JSON
const prettyJson = JSON.stringify(marioGame, null, 2);
console.log(prettyJson);

// Nested objects are preserved in JSON.
// For example, characters.mario still contains
// description, height, weight and speed.

// Pause execution to inspect the values
debugger;

// Convert to Pretty Print JSON
const prettyJson = JSON.stringify(user, null, 2);
console.log(prettyJson);
