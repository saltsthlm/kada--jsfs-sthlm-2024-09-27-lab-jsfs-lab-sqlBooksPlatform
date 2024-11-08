import { createService } from "./service";
import { createRouter } from "./router";
import type { Db } from "../../app";

export const createAuthorFeature = (db: Db) => {
  const service = createService(db);
  const router = createRouter(service);

  return {
    router,
    service
  };
};
