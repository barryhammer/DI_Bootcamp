
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    "isLoggedIn" BOOLEAN DEFAULT FALSE,
    customer_id INTEGER UNIQUE NOT NULL,
    FOREIGN KEY (customer_id)
        REFERENCES customer(id)
        ON DELETE CASCADE
);

INSERT INTO customer (first_name, last_name)
VALUES
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive');


INSERT INTO customer_profile ("isLoggedIn", customer_id)
VALUES
    (
        TRUE,
        (SELECT id FROM customer WHERE first_name = 'John')
    ),
    (
        FALSE,
        (SELECT id FROM customer WHERE first_name = 'Jerome')
    );


SELECT customer.first_name
FROM customer
INNER JOIN customer_profile
    ON customer.id = customer_profile.customer_id
WHERE customer_profile."isLoggedIn" = TRUE;

SELECT
    customer.first_name,
    customer_profile."isLoggedIn"
FROM customer
LEFT JOIN customer_profile
    ON customer.id = customer_profile.customer_id;

SELECT COUNT(*) AS not_logged_in
FROM customer
INNER JOIN customer_profile
    ON customer.id = customer_profile.customer_id
WHERE customer_profile."isLoggedIn" = FALSE;

