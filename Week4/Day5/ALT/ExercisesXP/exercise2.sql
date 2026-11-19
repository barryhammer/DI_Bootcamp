SELECT language_id, name
FROM language;

UPDATE film
SET language_id = (
    SELECT language_id
    FROM language
    WHERE TRIM(name) = 'French'
)
WHERE title = 'ACADEMY DINOSAUR';

SELECT
    constraint_name,
    column_name,
    foreign_table_name
FROM (
    SELECT
        tc.constraint_name,
        kcu.column_name,
        ccu.table_name AS foreign_table_name
    FROM information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kcu
        ON tc.constraint_name = kcu.constraint_name
        AND tc.table_schema = kcu.table_schema
    JOIN information_schema.constraint_column_usage ccu
        ON tc.constraint_name = ccu.constraint_name
        AND tc.table_schema = ccu.table_schema
    WHERE tc.table_name = 'customer'
      AND tc.table_schema = 'public'
      AND tc.constraint_type = 'FOREIGN KEY'
) AS foreign_keys;

DROP TABLE customer_review;

SELECT COUNT(*) AS outstanding_rentals FROM rental
WHERE return_date IS NULL;


SELECT
    film.film_id,
    film.title,
    film.replacement_cost,
    rental.rental_id,
    rental.rental_date
FROM film
JOIN inventory
    ON film.film_id = inventory.film_id
JOIN rental
    ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC, film.film_id
LIMIT 30;


SELECT
    film.film_id,
    film.title,
    film.description
FROM film
JOIN film_actor
    ON film.film_id = film_actor.film_id
JOIN actor
    ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope'
  AND actor.last_name = 'Monroe'
  AND film.description ILIKE '%sumo%';

SELECT
    film_id,
    title,
    description,
    length,
    rating
FROM film
WHERE length < 60
  AND rating = 'R'
  AND description ILIKE '%documentary%';


SELECT DISTINCT
    film.film_id,
    film.title,
    payment.amount,
    rental.rental_date,
    rental.return_date
FROM customer
JOIN rental
    ON customer.customer_id = rental.customer_id
JOIN inventory
    ON rental.inventory_id = inventory.inventory_id
JOIN film
    ON inventory.film_id = film.film_id
JOIN payment
    ON rental.rental_id = payment.rental_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND payment.amount > 4
  AND rental.return_date >= '2005-07-28'
  AND rental.return_date < '2005-08-02'
ORDER BY film.title;


SELECT DISTINCT
    film.film_id,
    film.title,
    film.description,
    film.replacement_cost
FROM customer
JOIN rental
    ON customer.customer_id = rental.customer_id
JOIN inventory
    ON rental.inventory_id = inventory.inventory_id
JOIN film
    ON inventory.film_id = film.film_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND (
      film.title ILIKE '%boat%'
      OR film.description ILIKE '%boat%'
  )
ORDER BY film.replacement_cost DESC;
