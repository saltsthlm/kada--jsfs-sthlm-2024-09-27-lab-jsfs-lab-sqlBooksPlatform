import { createService } from "./service";
import { Db } from "../../app";
import { createRouter } from "./router";

export const createBookFeature = (db: Db) => {
  const service = createService(db)
  const router = createRouter(service);

  return {
    router
  };
};
  
