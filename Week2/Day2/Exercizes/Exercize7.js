
// Exercise 7 - My Book List

// Step 1: Create an array containing two books
const allBooks = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://covers.openlibrary.org/b/isbn/9780547928227-M.jpg",
        alreadyRead: true
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
        alreadyRead: false
    }
];

// Step 2: Retrieve the section
const bookSection = document.querySelector(".listBooks");

// Step 3: Loop through the books
allBooks.forEach(book => {

    // Create a div for each book
    const bookDiv = document.createElement("div");

    // Create a paragraph for the book details
    const bookDetails = document.createElement("p");

    bookDetails.textContent =
        `${book.title} written by ${book.author}`;

    // Change text color if already read
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    // Create an image
    const bookImage = document.createElement("img");

    bookImage.src = book.image;
    bookImage.alt = book.title;
    bookImage.style.width = "100px";

    // Append details and image to the div
    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImage);

    // Append the div to the section
    bookSection.appendChild(bookDiv);
});
