import { decimal, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const booksTable = pgTable("books", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 120 }).notNull(),
  description: varchar({ length: 250 }).notNull(),
  price: integer().notNull(),
  author_id: integer().notNull()
});
