import { PoolClient } from "pg";

export const createAuthorService = (db: PoolClient) => {
  return {
    async getAll() {
      const query = "SELECT * FROM author";
      const authors = await db.query(query);
      return authors.rows[0];
    },
    async getById(id: string) {
      const query = "SELECT * FROM author WHERE id = $1";
      const authors = await db.query(query, [id]);
      return authors.rows[0];
    },
  };
};
