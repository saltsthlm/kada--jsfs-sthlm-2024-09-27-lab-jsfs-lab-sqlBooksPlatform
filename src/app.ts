import express, { Express } from "express";
import { createAuthorFeature } from "./feature/authors/feature";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { createBookFeature } from "./feature/books/feature";
import { createBuyersFeature } from "./feature/buyers/feature";
import { createPurchasesFeature } from "./feature/purchases/feature";


const app: Express = express();
const port = 3001;

const db = drizzle(process.env.DATABASE_URL!);

(async () => {
  app.use(express.json());
  app.use("/api/authors", createAuthorFeature(db).router);
  app.use("/api/books", createBookFeature(db).router);
  //app.use("/api/buyers", createBuyersFeature(db).router);
  //app.use("/api/purchases", createPurchasesFeature(db).router);
})();

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);

export type Db = ReturnType<typeof drizzle>;
