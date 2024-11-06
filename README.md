# Books Marketplace API - Postgres

## The Purpose

Enhance your skills in handling relational databases with PostgreSQL and Node.js by building a comprehensive API for a book-selling platform.

This lab is detailed and provides ample guidance, so make sure to read through the entire document thoroughly.

## The Lab

Your task is to develop an Express API for managing data related to books, authors, and buyers in a PostgreSQL database. This will involve setting up database tables, populating them with data, and then creating an API for data management.

Testing will be manual; we recommend using tools like Postman.

### The tables and their data

Create the following tables in your database:

- `authors` - Holds information about book authors.

  - Fields:
    - `id` - unique identifier
    - `name` - author's name
    - `bio` - short biography

- `books` - Contains details about the books.

  - Fields:
    - `id` - unique identifier
    - `title` - book title
    - `description` - brief description
    - `price` - selling price
    - `authorId` - foreign key to the authors table

- `buyers` - Stores information about buyers.

  - Fields:
    - `id` - unique identifier
    - `name` - buyer's name
    - `email` - buyer's email (unique)

- `purchases` - A junction table for many-to-many relationship between buyers and books (records purchases).
  - Fields:
    - `buyerId` - foreign key to the buyers table
    - `bookId` - foreign key to the books table
    - `purchaseDate` - date of purchase

### The API endpoints for you to implement

Implement the following endpoints:

- `GET` `/api/books` - list all books, including author details
- `GET` `/api/books/:id` - get details of a single book, including author
- `POST` `/api/books` - add a new book (exclude `id`, include `authorId`)
- `PUT` `/api/books/:id` - update a book's details
- `DEL` `/api/books/:id` - delete a book
- `GET` `/api/authors` - list all authors with their books
- `POST` `/api/buyers` - add a new buyer
- `GET` `/api/purchases` - list all purchases, including buyer and book details
- `POST` `/api/purchases` - record a new purchase (include `buyerId` and `bookId`)

### Additional Guidance

- Use `pgAdmin` and `VSCode Extension for Postgres` for database management.
- Seed your database using a script similar to `initSQL.sql`.
- Create separate files for different aspects of your API, e.g., `db.ts` for database access code.
- Utilize the `pg` package for database interactions.
- Manual testing is recommended, though you may explore automated testing with tools like `supertest`.
