import express, { Express } from "express";
import { createAuthorFeature } from "./feature/authors/feature";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { createBookFeature } from "./feature/books/feature";
import { createBuyersFeature } from "./feature/buyers/feature";
import { createPurchasesFeature } from "./feature/purchases/feature";
import { createErrorRequestHandler } from "./middleware/error-handler";

const app: Express = express();
const port = 3001;

(async () => {
  const db = drizzle(process.env.DATABASE_URL!);

  app.use(express.json());
  const { service, router} = createAuthorFeature(db);
  app.use("/api/authors", router);

  app.use("/api/books", createBookFeature(db, service).router);

  app.use(createErrorRequestHandler());
  //app.use("/api/buyers", createBuyersFeature(db).router);
  //app.use("/api/purchases", createPurchasesFeature(db).router);
})();

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);

export type Db = ReturnType<typeof drizzle>;
