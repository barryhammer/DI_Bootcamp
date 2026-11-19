CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100) NOT NULL
);

INSERT INTO book (title, author)
VALUES
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K Rowling'),
    ('To kill a mockingbird', 'Harper Lee');

CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);

INSERT INTO student (name, age)
VALUES
    ('John', 12),
    ('Lera', 11),
    ('Patrick', 10),
    ('Bob', 14);


CREATE TABLE library (
    book_fk_id INTEGER NOT NULL,
    student_fk_id INTEGER NOT NULL,
    borrowed_date DATE,

    PRIMARY KEY (book_fk_id, student_fk_id),

    FOREIGN KEY (book_fk_id)
        REFERENCES book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (student_fk_id)
        REFERENCES student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


INSERT INTO library (student_fk_id, book_fk_id, borrowed_date)
VALUES
    (
        (SELECT student_id FROM student WHERE name = 'John'),
        (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
        '2022-02-15'
    ),
    (
        (SELECT student_id FROM student WHERE name = 'Bob'),
        (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
        '2021-03-03'
    ),
    (
        (SELECT student_id FROM student WHERE name = 'Lera'),
        (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
        '2021-05-23'
    ),
    (
        (SELECT student_id FROM student WHERE name = 'Bob'),
        (SELECT book_id FROM book WHERE title = 'Harry Potter'),
        '2021-08-12'
    );


SELECT * FROM library;


SELECT
    student.name,
    book.title
FROM library
INNER JOIN student
    ON library.student_fk_id = student.student_id
INNER JOIN book
    ON library.book_fk_id = book.book_id
ORDER BY student.name;


SELECT ROUND(AVG(student.age), 2) AS average_age
FROM library
INNER JOIN student
    ON library.student_fk_id = student.student_id
INNER JOIN book
    ON library.book_fk_id = book.book_id
WHERE book.title = 'Alice In Wonderland';

DELETE FROM student
WHERE name = 'John';