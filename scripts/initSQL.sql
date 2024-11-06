-- Example dummy table
DROP TABLE IF EXISTS Instructors;

-- Auto incremented ids
CREATE TABLE authors
(
  id SERIAL PRIMARY KEY,
  name varchar(120) NOT NULL,
  bio varchar(250) NOT NULL,
);
CREATE TABLE books
(
  id SERIAL PRIMARY KEY,
  title varchar(100) NOT NULL,
  description varchar(250) NOT NULL,
  price float4 NOT NULL,
  author_id integer NOT NULL,
);
CREATE TABLE buyers
(
  id SERIAL PRIMARY KEY,
  name varchar(120) NOT NULL,
  email varchar(250) NOT NULL,
);
CREATE TABLE purchases
(
  id SERIAL PRIMARY KEY,
  buyer_id integer NOT NULL,
  book_id integer NOT NULL,
  purchases_date timestamp NOT NULL,
);

-- With UUID

-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE TABLE Instructors
-- (
--   Id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
--   Name varchar(120) NOT NULL
-- );

INSERT INTO Instructors (Name) VALUES ('Ahsan');
INSERT INTO Instructors (Name) VALUES ('Johannes');
INSERT INTO Instructors (Name) VALUES ('Mathias');

