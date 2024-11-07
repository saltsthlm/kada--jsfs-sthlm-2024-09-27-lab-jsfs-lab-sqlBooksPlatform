import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const authorsTable = pgTable("authors", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 120 }).notNull(),
  bio: varchar({ length: 250 }).notNull(),
});
