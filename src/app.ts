import express, { Express } from "express";
import { createAuthorFeature } from "./feature/authors/feature";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";


const app: Express = express();
const port = 3001;

const db = drizzle(process.env.DATABASE_URL!);

(async () => {
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
