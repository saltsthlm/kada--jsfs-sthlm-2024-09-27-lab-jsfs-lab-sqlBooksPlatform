export const createTablesAndSeedData = () => {
  return `
        DROP TABLE IF EXISTS purchases;
        DROP TABLE IF EXISTS buyers;
        DROP TABLE IF EXISTS books;
        DROP TABLE IF EXISTS authors;

      CREATE TABLE IF NOT EXISTS authors (
        id SERIAL PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        bio VARCHAR(250) NOT NULL
      );
  
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description VARCHAR(250) NOT NULL,
        price FLOAT NOT NULL,
        author_id INTEGER NOT NULL,
        FOREIGN KEY (author_id) REFERENCES authors(id)
          ON DELETE CASCADE
      );
  
      CREATE TABLE IF NOT EXISTS buyers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        email VARCHAR(250) NOT NULL UNIQUE
      );
  
      CREATE TABLE IF NOT EXISTS purchases (
        id SERIAL PRIMARY KEY,
        buyer_id INTEGER NOT NULL,
        book_id INTEGER NOT NULL,
        purchase_date TIMESTAMP NOT NULL,
        FOREIGN KEY (buyer_id) REFERENCES buyers(id)
          ON DELETE CASCADE,
        FOREIGN KEY (book_id) REFERENCES books(id)
          ON DELETE CASCADE
      );
  
      INSERT INTO authors (name, bio) VALUES
        ('F. Scott Fitzgerald', 'An American novelist and short story writer, widely regarded as one of the greatest American writers of the 20th century.'),
        ('J.K. Rowling', 'A British author, best known for writing the Harry Potter fantasy series.'),
        ('George Orwell', 'An English novelist, essayist, journalist and critic, known for his works such as 1984 and Animal Farm.');
  
      INSERT INTO books (title, description, price, author_id) VALUES
        ('The Great Gatsby', 'A novel about the American dream and the disillusionment with it, set in the 1920s.', 10.99, 1),
        ('Harry Potter and the Sorcer''s Stone', 'A young wizard discovers his magical heritage and begins his journey in the wizarding world.', 15.99, 2),
        ('1984', 'A dystopian novel set in a totalitarian society under constant surveillance.', 12.49, 3);
  
      INSERT INTO buyers (name, email) VALUES
        ('Alice Johnson', 'alice.johnson@example.com'),
        ('Bob Smith', 'bob.smith@example.com'),
        ('Charlie Brown', 'charlie.brown@example.com');
  
      INSERT INTO purchases (buyer_id, book_id, purchase_date) VALUES
        (1, 1, '2024-11-06 12:00:00'),
        (2, 2, '2024-11-06 12:30:00'),
        (3, 3, '2024-11-06 13:00:00');
    `;
};
