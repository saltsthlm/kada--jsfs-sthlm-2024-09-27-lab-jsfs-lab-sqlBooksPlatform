import { createService } from "./service";
import { createRouter } from "./router";
import { Db } from "../../app";

export const createPurchasesFeature = (db: Db) => {
  const service = createService(db);
  const router = createRouter(service);

  return {
    router,
  };
};
