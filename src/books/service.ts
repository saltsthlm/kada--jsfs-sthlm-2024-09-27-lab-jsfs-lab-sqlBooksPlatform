import { describe } from "node:test";
import { PoolClient } from "pg";
import { z, ZodSchema } from "zod"

export const createBookService = (db: PoolClient) => {
  return {
    async getAll() {
      const query = "SELECT * FROM books";
      const books = await db.query(query);
      return books.rows;
    },
    async getById(id: string) {
      const query = "SELECT * FROM books WHERE id=$1";
      const book = await db.query(query, [id]);
      if (book.rows.length === 0) {
        throw new Error("Book with that id does not exist");
      }
      return book.rows[0];
    },
    async post(book: Book) {
        const {title, description, price, author_id } = book
        bookSchema.parse(book)
        const query = "INSERT INTO books (title, description, price, author_id) values($1, $2, $3, $4)"
        await db.query(query, [title, description, price, author_id])
    },
    async patch(book: Book, id: string) {
        const { title, description, price, author_id } = book;
        
        const updateQuery = `
            UPDATE books
            SET title = $1, description = $2, price = $3, author_id = $4
            WHERE id = $5
        `;
        const result = await db.query(updateQuery, [title, description, price, author_id, id]);
        return result.rows[0];
    }
    
  };
};

export const bookSchema = z.object({
    //id: z.string(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    author_id: z.string()
});
type Book = z.infer<typeof bookSchema>;

export type BookService = ReturnType<typeof createBookService>;
