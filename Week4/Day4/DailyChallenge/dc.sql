 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

-- Count = 3; query reads as SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( NULL )

SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- Count = 2; query reads as SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( 5 )

SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- Count = 0; query reads as SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( NULL )

SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

-- Count = 2; query reads as SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( 5 )