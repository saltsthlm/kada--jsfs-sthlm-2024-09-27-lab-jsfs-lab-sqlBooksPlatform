import express, { Express } from "express";
import { createDatabase } from "./db";
import { createTablesAndSeedData } from "./db-seed";
import { createAuthorFeature } from "./authors/feature";
import { createBookFeature } from "./books/feature";
import { createPurchasesFeature } from "./purchases/feature";
import { createBuyersFeature } from "./buyers/feature";

const app: Express = express();
const port = 3001;

(async () => {
  const client = await createDatabase();
  client.query(createTablesAndSeedData());

  app.use(express.json());
  app.use("/api/authors", createAuthorFeature(client));
  app.use("/api/books", createBookFeature(client));
  app.use("/api/buyers", createBuyersFeature(client));
  app.use("/api/purchases", createPurchasesFeature(client));
})();

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
