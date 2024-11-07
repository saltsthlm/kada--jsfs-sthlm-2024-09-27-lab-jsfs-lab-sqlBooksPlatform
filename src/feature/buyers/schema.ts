import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const buyersTable = pgTable("buyers", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 120 }).notNull(),
  email: varchar({ length: 250 }).notNull().unique(),
});
