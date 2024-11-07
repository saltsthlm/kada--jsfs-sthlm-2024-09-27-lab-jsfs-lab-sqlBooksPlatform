import { z } from "zod";
import { Db } from "../../app";
import { booksTable } from "./schema";
import { title } from "process";
import { eq } from "drizzle-orm";

const seed = async (db: Db) => {
  const book: typeof booksTable.$inferInsert = {
    title: "John",
    description: "detta är en bio",
    price: 19.90,
    author_id: 4
  };
  
  const books = [];

  for (let i = 0; i < 10; i++) {
    books.push({ ...book, title: `book ${i}` });
  }

  for (const book of books) {
    await db.insert(booksTable).values(book);
  }

  console.log("Books table populated successfully");  
};

export const createService = (db: Db) => {
  return {
    async getAll() {
      return await db.select().from(booksTable);
    },
    async getById(id: string) {
      const books = await db.select().from(booksTable).where(eq(booksTable.id, Number(id)));
      if (books.length === 0) {
        throw new Error("Book with that id does not exist");
      }
      return books[0];
    },
    async add(book: Book) {
      bookSchema.parse(book);
      const result = await db.insert(booksTable).values(book)
      return result.rows[0];
    },
    async patch(book: Book, id: string) {
      bookSchema.parse(book);
      await db.update(booksTable).set({
        
      })

      if (result.rows.length === 0) {
        throw new Error("Book with that id does not exist");
      }

      return result.rows[0];
    },
    async delete(id: string) {
      const query = "DELETE FROM books WHERE id = $1";
      await db.query(query, [id]);
    },
  };
};

export const bookSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  author_id: z.number(),
});

type Book = z.infer<typeof bookSchema>;
export type BookService = ReturnType<typeof createService>;
