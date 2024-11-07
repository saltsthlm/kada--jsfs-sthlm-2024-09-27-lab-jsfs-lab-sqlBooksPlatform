import { number, z } from "zod";
import { Db } from "../../app";
import { booksTable } from "./schema";
import { eq } from "drizzle-orm";

const seed = async (db: Db) => {
  const book: typeof booksTable.$inferInsert = {
    title: "John",
    description: "detta är en bio",
    price: 19.99,
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
  seed(db);
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
      const parsedBook = bookSchema.parse(book);
      const result = await db.insert(booksTable).values(parsedBook)
      return result.rows[0];
    },
    async patch(updateData: UpdateBook, id: string) {
      const parsedUpdate = updateBookSchema.parse(updateData);

      await db.update(booksTable).set({
          ...parsedUpdate
      }).where(eq(booksTable.id, Number(id)));
      throw new Error("Catch me if you can");
    },
    async delete(id: string) {
      await db.delete(booksTable).where(eq(booksTable.id, Number(id)));
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

export const updateBookSchema = z.object({
  title: z.string().trim().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  author_id: z.number().optional(),
});

type UpdateBook = z.infer<typeof updateBookSchema>;