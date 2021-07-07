
DROP TABLE IF EXISTS clothes;
DROP TABLE IF EXISTS food;

CREATE TABLE clothes (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    quantity varchar(355)
);



CREATE TABLE food (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    quantity varchar(355)
);
