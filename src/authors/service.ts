import { PoolClient } from "pg";

export const createAuthorService = async (db: PoolClient) => {
  return {
    async getAll() {
      const query = "SELECT * FROM authors";
      const authors = await db.query(query);
      return authors.rows[0];
    },
    async getById(id: string) {
      const query = "SELECT * FROM authors WHERE id = $1";
      const authors = await db.query(query, [id]);
      return authors.rows[0];
    },
  };
};
