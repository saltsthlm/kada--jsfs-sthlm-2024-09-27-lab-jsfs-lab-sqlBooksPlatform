import { integer, pgTable, varchar, numeric } from "drizzle-orm/pg-core";

export const booksTable = pgTable("books", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 120 }).notNull(),
  description: varchar({ length: 250 }).notNull(),
  price: numeric().notNull(), // ÅTERSKAPA FEL SÅ ATT VI KAN FÅNGA DET!!!!
  author_id: integer().notNull(),
});
