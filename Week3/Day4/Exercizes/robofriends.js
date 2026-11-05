      // Array of robots with keys id, name, username, email and image. 
      const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: './images/Cylon.png?250x250'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: './images/Data.png?250x250'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: './images/Eve.png?250x250'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: './images/Marvin.png?250x250'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: './images/R2D2.png?250x250'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: './images/Rosey.png?250x250'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: './images/T800.png?250x250'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: './images/Walle.png?250x250'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'./images/Bender.png?250x250'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'./images/BB8.png?250x250'
          }
          ];


const container = document.querySelector("#robotContainer");
const searchBox = document.querySelector("#searchBox");

// Display the robot cards
// This function receives an array of robots and displays their cards.
function displayRobots(robotList) {

    // Clear any existing cards
    container.innerHTML = "";

    // Create a card for each robot
    robotList.forEach(robot => {

        // Create a new element <article>
        const card = document.createElement("article");
        card.className = "robot-card";

        // Inside <article, create <div> element
        const circle = document.createElement("div");
        circle.className = "robot-circle";

        // Inside div element, create image element with the image coming from the robot array
        const image = document.createElement("img");
        image.className = "robot";
        image.src = robot.image;
        image.alt = robot.name;

        // Create a new <h2> element and set its text to the robot's name.
        const name = document.createElement("h2");
        name.textContent = robot.name;

        // Add a paragraph element with the email address
        const email = document.createElement("p");
        email.textContent = robot.email;

        // Add elements to the card
        circle.appendChild(image);
        card.appendChild(circle);

        // Add the heading to the robot card.
        card.appendChild(name);
        card.appendChild(email);

        // Add the card to the webpage
        container.appendChild(card);
    });
}

// Filter robots when typing in the search box, using "input"
searchBox.addEventListener("input", function() {  // Runs every time a user types or deletes a character.

    const searchText = searchBox.value.toLowerCase();

    // Checks each robot's name against the search text
    const filteredRobots = robots.filter(robot => { // Filters results in robots array.
        return robot.name.toLowerCase().includes(searchText); // Uses lowercase to check name.
    });

    displayRobots(filteredRobots);
});

// Display all robots when the page loads
displayRobots(robots);
