import { PoolClient } from "pg";
import { createService } from "./service";
import { createRouter } from "./router";

export const createBuyersFeature = (db: PoolClient) => {
  const service = createService(db);
  const router = createRouter(service);

  return {
    router,
  };
};
