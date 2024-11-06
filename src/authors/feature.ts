import { PoolClient } from "pg";
import { createAuthorService } from "./service";
import { createAuthorsRouter } from "./router";

export const createAuthorFeature = (db: PoolClient) => createAuthorsRouter(createAuthorService(db));
