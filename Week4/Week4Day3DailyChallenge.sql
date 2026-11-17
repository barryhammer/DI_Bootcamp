-- Daily Challenge: Actors

CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
('Matt','Damon','08/10/1970', 5),
('George','Clooney','06/05/1961', 2),
('Angelina','Jolie','04/06/1975', 1),
('Jennifer','Aniston','11/02/19691', 0);

-- Count actors in table

SELECT COUNT(*) FROM actors

-- Add actor with blank fields
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
('Vinnie','Jones','05/04/1969')
-- ERROR:  INSERT has more target columns than expressions
-- LINE 8: INSERT INTO actors (first_name, last_name, age, number_oscar...