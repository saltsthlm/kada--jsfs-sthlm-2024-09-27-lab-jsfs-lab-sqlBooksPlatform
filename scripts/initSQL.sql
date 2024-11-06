-- Example dummy table
DROP TABLE IF EXISTS Instructors;

-- Auto incremented ids
CREATE TABLE Instructors
(
  Id SERIAL PRIMARY KEY,
  Name varchar(120) NOT NULL
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

