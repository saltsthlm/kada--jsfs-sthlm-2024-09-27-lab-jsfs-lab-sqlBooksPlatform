import { PoolClient } from "pg";
import { createBuyersService } from "./service";
import { createBuyersRouter } from "./router";

export const createBuyersFeature = (db: PoolClient) =>
  createBuyersRouter(createBuyersService(db));
