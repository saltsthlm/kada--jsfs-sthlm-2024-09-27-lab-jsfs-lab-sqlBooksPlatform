import express, { Express } from "express";
import { createDatabase } from "./db";
import { createTablesAndSeedData } from "./db-seed";
import { createAuthorService } from "./authors/service";
import { createAuthorsRouter } from "./authors/router";
import { createBookService } from "./books/service";
import { createBooksRouter } from "./books/router";

const app: Express = express();
const port = 3001;

(async () => {
  const client = await createDatabase();
  client.query(createTablesAndSeedData());
  const authorService = createAuthorService(client);
  const authorRouter = createAuthorsRouter(authorService);
  const BookService = createBookService(client);
  const bookRouters = createBooksRouter(BookService)
  app.use(express.json())
  app.use("/api/authors", authorRouter);
  app.use("/api/books", bookRouters)

  const authors = await authorService.getById("1");
  console.log(authors);
})();

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);

