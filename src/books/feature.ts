import { PoolClient } from "pg";
import { createBookService } from "./service";
import { createBooksRouter } from "./router";

export const createBookFeature = (db: PoolClient) => 
  createBooksRouter(createBookService(db));

