import express, { Express } from "express";
import { createDatabase } from "./db";
import { createTablesAndSeedData } from "./db-seed";
import { createAuthorFeature } from "./authors/feature";
import { createBookFeature } from "./books/feature";
import { createPurchasesFeature } from "./purchases/feature";
import { createBuyersFeature } from "./buyers/feature";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { authorsTable } from "./authors/schema";

const app: Express = express();
const port = 3001;

(async () => {

  const db = drizzle(process.env.DATABASE_URL!);
  const user: typeof authorsTable.$inferInsert = {
    name: 'John',
    bio: 'detta är en bio',
  };  

  await db.insert(authorsTable).values(user);
  console.log('New user created!')

  const users = await db.select().from(authorsTable);
  console.log('Getting all users from the database: ', users)
  //const client = await createDatabase();
  //client.query(createTablesAndSeedData());

  //const books = await db.select().from('books');
  //console.log(books);

  app.use(express.json());
/*   app.use("/api/authors", createAuthorFeature(client));
  app.use("/api/books", createBookFeature(client));
  app.use("/api/buyers", createBuyersFeature(client));
  app.use("/api/purchases", createPurchasesFeature(client)); */
})();

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
