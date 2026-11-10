// Define the structure of a Book
interface Book {
    title: string;
    author: string;
    isbn: string;
}

// Parent class
class Library {
    private books: Book[] = [];

    // Add a book to the library
    public addBook(book: Book): void {
        this.books.push(book);
    }

    // Find a book by its ISBN
    public getBookDetails(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }

    // Allow subclasses to retrieve book titles
    protected getBookTitles(): string[] {
        return this.books.map(book => book.title);
    }
}

// Child class
class DigitalLibrary extends Library {
    constructor(public readonly website: string) {
        super();
    }

    // Return all book titles
    public listBooks(): string[] {
        return this.getBookTitles();
    }
}

// Create a digital library
const myLibrary = new DigitalLibrary("www.mylibrary.com");

// Add books
myLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935"
});

myLibrary.addBook({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "9780547928227"
});

myLibrary.addBook({
    title: "Dune",
    author: "Frank Herbert",
    isbn: "9780441172719"
});

// Print book details
console.log(myLibrary.getBookDetails("9780451524935"));

// Print all book titles
console.log(myLibrary.listBooks());

// Print the library website
console.log(myLibrary.website);