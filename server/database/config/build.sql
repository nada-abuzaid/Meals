BEGIN;

DROP TABLE IF EXISTS meals CASCADE;

CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    description TEXT NOT NULL,
    category varchar(50) NOT NULL,
    price INT NOT NULL,
    img_url TEXT NOT NULL
);

COMMIT;