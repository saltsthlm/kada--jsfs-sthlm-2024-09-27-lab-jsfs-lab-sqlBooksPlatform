import { eq } from "drizzle-orm";
import type { Db } from "../../app";
import { authorsTable } from "./schema";

const seed = async (db: Db) => {
  const author: typeof authorsTable.$inferInsert = {
    name: "John",
    bio: "detta är en bio",
    book_id: 0
  };

  const authors = [];

  for (let i = 0; i < 10; i++) {
    authors.push({ ...author, name: `John ${i}`, book_id: ++i });
  }

  for (const author of authors) {
    await db.insert(authorsTable).values(author);
  }

  console.log("Authors table populated successfully");
};

export const createService = (db: Db) => {
  seed(db);

  return {
    async getAll() {
      return await db.select().from(authorsTable);
    },
    async getById(id: string) {
      const authors = await db
        .select()
        .from(authorsTable)
        .where(eq(authorsTable.id, Number(id)));
      if (authors.length === 0) {
        throw new Error("Id does not exist for this author");
      }
      return authors[0];
    },
  };
};

export type Service = ReturnType<typeof createService>;
