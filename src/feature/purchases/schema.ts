import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";

export const purchasesTable = pgTable("purchases", {
  buyer_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  book_id: integer().notNull(),
  purchase_date: timestamp().notNull(),
});
