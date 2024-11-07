import { PoolClient } from "pg";
import { createService } from "./service";
import { createRout} from "./router";

export const createBookFeature = (db: PoolClient) => {
  const service = createService(db)
  const router = createRouter(service);

  return {
    router
  };
};
  
