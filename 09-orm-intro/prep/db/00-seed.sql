DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS states;

CREATE TABLE cities (
    id INTEGER PRIMARY KEY,
    name TEXT,
    population INTEGER,
    state_id INTEGER
);

CREATE TABLE states (
    id INTEGER PRIMARY KEY,
    name TEXT,
    motto Text
);

INSERT INTO states (name, motto)
VALUES ("Washington", "Aliki - Bye and Bye"), -- into the future!
    ("Oregon", "Alis volat propriis"), -- she flies w/ her own wings
    ("California", "Eureka!"); -- I have found it

INSERT INTO cities (name, population, state_id)
VALUES
    ("Seattle", 724745, 1),
    ("Olympia", 51609, 1),
    ("Tacoma", 213418, 1),
    ("Portland", 647805, 2),
    ("San Francisco", 884363, 3);