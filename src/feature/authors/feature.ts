import { createService } from "./service";
import { createRouter } from "./router";
import type { Db } from "../../app";

export const createAuthorFeature = (db: Db) => {
  const service = createService(db);
  const router = createRouter(service);

  return {
    router,
  };
};

// await db.insert(authorsTable).values(user);
// console.log('New user created!')

// const users = await db.select().from(authorsTable);
// console.log('Getting all users from the database: ', users)
