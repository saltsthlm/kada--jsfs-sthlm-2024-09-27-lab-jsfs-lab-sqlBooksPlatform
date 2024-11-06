import { PoolClient } from "pg";
import { createBookService } from "./service";
import { createBooksRouter } from "./router";

export const createBookFeature = (db: PoolClient) => {
    const service = createBookService(db);
    const router = createBooksRouter(service);

    return router;
}