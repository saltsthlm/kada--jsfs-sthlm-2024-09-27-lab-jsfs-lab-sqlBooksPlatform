import express, { Express } from "express";
import { createDatabase } from "./db";
import { createTablesAndSeedData } from "./db-seed";
import { createAuthorFeature } from "./feature/authors/feature";
import { createBookFeature } from "./feature/books/feature";
import { createPurchasesFeature } from "./feature/purchases/feature";
import { createBuyersFeature } from "./feature/buyers/feature";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { authorsTable } from "./feature/authors/schema";

const app: Express = express();
const port = 3001;

const db = drizzle(process.env.DATABASE_URL!);

(async () => {
  //const client = await createDatabase();
  //client.query(createTablesAndSeedData());

  //const books = await db.select().from('books');
  //console.log(books);

  app.use(express.json());
  app.use("/api/authors", createAuthorFeature(db).router);
  // app.use("/api/books", createBookFeature(client));
  // app.use("/api/buyers", createBuyersFeature(client));
  // app.use("/api/purchases", createPurchasesFeature(client));
})();

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);

export type Db = ReturnType<typeof drizzle>;
