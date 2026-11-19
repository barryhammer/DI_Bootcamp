SELECT *
FROM language;

SELECT
    film.title,
    film.description,
    language.name AS language_name
FROM film
INNER JOIN language
    ON film.language_id = language.language_id;

SELECT
    film.title,
    film.description,
    language.name AS language_name
FROM language
LEFT JOIN film
    ON language.language_id = film.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name)
VALUES
    ('Goldfinger'),
    ('The Spy Who Loved Me'),
    ('Casino Royale'),
    ('GoldenEye'),
    ('Skyfall');

SELECT * FROM new_film;

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL,
    language_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (film_id)
        REFERENCES new_film(id)
        ON DELETE CASCADE,  --  A foreign key referential action in SQL that automatically deletes child table rows whenever the corresponding 
                            -- referenced row in the parent table is deleted.

    FOREIGN KEY (language_id)
        REFERENCES language(language_id)
);

INSERT INTO customer_review
    (film_id, language_id, title, score, review_text)
VALUES
    (
        (SELECT id FROM new_film WHERE name = 'Goldfinger'),
        (SELECT language_id FROM language WHERE TRIM(name) = 'English'),
        'Classic James Bond',
        9,
        'One of the best James Bond films.'
    ),
    (
        (SELECT id FROM new_film WHERE name = 'Casino Royale'),
        (SELECT language_id FROM language WHERE TRIM(name) = 'English'),
        'Excellent Bond Reboot',
        10,
        'Daniel Craig delivers a great performance.'
    );

DELETE FROM new_film
WHERE name = 'Goldfinger';