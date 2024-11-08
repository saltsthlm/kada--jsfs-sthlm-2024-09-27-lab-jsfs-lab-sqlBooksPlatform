import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { authorsTable } from "../authors/schema";

export const booksTable = pgTable("books", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 120 }).notNull(),
  description: varchar({ length: 250 }).notNull(),
  price: varchar().notNull(), // ÅTERSKAPA FEL SÅ ATT VI KAN FÅNGA DET!!!!
});

export const booksToAuthors = pgTable("books_to_authors", {
  bookId: integer("book_id").notNull().references(() => booksTable.id),
  authorId: integer("author_id").notNull().references(() => authorsTable.id),
});
