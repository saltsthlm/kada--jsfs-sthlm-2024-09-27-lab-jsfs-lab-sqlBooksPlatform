DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS buyers;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;


CREATE TABLE authors
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  bio VARCHAR(250) NOT NULL
);


CREATE TABLE books
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(250) NOT NULL,
  price FLOAT4 NOT NULL,
  author_id INTEGER NOT NULL,
  FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE
);


CREATE TABLE buyers
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(250) NOT NULL
);

CREATE TABLE purchases
(
  id SERIAL PRIMARY KEY,
  buyer_id INTEGER NOT NULL,
  book_id INTEGER NOT NULL,
  purchase_date TIMESTAMP NOT NULL,
  FOREIGN KEY (buyer_id) REFERENCES buyers(id) ON DELETE CASCADE,
  FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
);

-- Optional: UUID extension and table for unique identifiers
-- Uncomment if UUIDs are needed
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CREATE TABLE Instructors
-- (
--   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   name VARCHAR(120) NOT NULL
-- );

-- Sample data insertion for Instructors table
-- Uncomment if UUID table and data are needed
-- INSERT INTO Instructors (name) VALUES ('Ahsan');
-- INSERT INTO Instructors (name) VALUES ('Johannes');
-- INSERT INTO Instructors (name) VALUES ('Mathias');
