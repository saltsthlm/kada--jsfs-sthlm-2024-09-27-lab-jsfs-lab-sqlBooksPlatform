import { PoolClient } from "pg";
import { createPurchasesService } from "./service";
import { createPurchasesRouter } from "./router";

export const createPurchasesFeature = (db: PoolClient) =>
  createPurchasesRouter(createPurchasesService(db));
