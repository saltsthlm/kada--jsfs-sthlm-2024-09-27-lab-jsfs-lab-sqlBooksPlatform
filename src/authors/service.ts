import { PoolClient } from "pg";

export const createAuthorService = (db: PoolClient) => {
  return {
    async getAll() {
      const query = "SELECT * FROM authors";
      const authors = await db.query(query);
      return authors.rows;
    },
    async getById(id: string) {
      const query = "SELECT * FROM authors WHERE id = $1";
      const authors = await db.query(query, [id]);
      if (authors.rows.length === 0) {
        throw new Error("Id does not exist for this author");
      }
      return authors.rows[0];
    },
  };
};

export type AuthorService = ReturnType<typeof createAuthorService>;
