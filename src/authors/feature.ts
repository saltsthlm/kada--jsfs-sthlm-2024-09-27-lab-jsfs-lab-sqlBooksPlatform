import { PoolClient } from "pg";
import { createAuthorService } from "./service";
import { createAuthorsRouter } from "./router";

export const createAuthorFeature = (db: PoolClient) => {
    const service = createAuthorService(db);
    const router = createAuthorsRouter(service);

    return router 
}


