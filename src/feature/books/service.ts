import { z } from "zod";
import { Db } from "../../app";
import { booksTable, booksToAuthors } from "./schema";
import { eq } from "drizzle-orm";
import { BadRequestError, NotFoundError } from "../../errors";
import { authorsTable } from "../authors/schema";
import { AuthorService } from "./types";

const seed = async (db: Db) => {
  const book: typeof booksTable.$inferInsert = {
    title: "John",
    description: "detta är en bio",
    price: "19.99",
  };
  
  const books = [];

  for (let i = 0; i < 3; i++) {
    books.push({ ...book, title: `book ${i}` });
  }

  for (const book of books) {
    await db.insert(booksTable).values(book);
  }

  console.log("Books table populated successfully");
};


// const booksToAuthors: typeof booksToAuthors.$inferInsert = {
//   book_id: 
// };


export const createService = (db: Db, authorService: AuthorService) => {
  seed(db);
  return {
    async getAll() {
      return await db.select().from(booksTable);
    },

     async getBooksAndAuthors() {
      const result = await db.select()
        .from(booksToAuthors)
        .leftJoin(authorsTable, eq(booksToAuthors.authorId, authorsTable.id))
        .leftJoin(booksTable, eq(booksToAuthors.bookId, booksTable.id))
        .where(eq(authorsTable.id, 1))
        .execute()

      console.log(result)
      return result;
    },

    async getById(id: string) {
      const books = await db
        .select()
        .from(booksTable)
        .where(eq(booksTable.id, Number(id)));
      if (books.length === 0)
        throw new NotFoundError("Book with that id does not exist");
      return books[0];
    },
    async add(book: Book) {
      const parsedBook = bookSchema.parse(book);
      const insertedBook = await db.insert(booksTable).values(parsedBook).returning();
      const authorId = await authorService.getById("1");
      await db.insert(booksToAuthors).values({
        bookId: insertedBook[0].id,
        authorId: authorId.id
      });
      
    },
    async patch(updateData: UpdateBook, id: string) {
      const parsedUpdate = updateBookSchema.parse(updateData);
      if (Object.keys(parsedUpdate).length === 0)
        throw new BadRequestError("Can't update with wrong input.");
      await db
        .update(booksTable)
        .set({
          ...parsedUpdate,
        })
        .where(eq(booksTable.id, Number(id)));
    },
    async delete(id: string) {
      await db.delete(booksTable).where(eq(booksTable.id, Number(id)));
    },
  };
};

export const bookSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
});

type Book = z.infer<typeof bookSchema>;
export type BookService = ReturnType<typeof createService>;

export const updateBookSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  price: z.string().optional(),
});

type UpdateBook = z.infer<typeof updateBookSchema>;
