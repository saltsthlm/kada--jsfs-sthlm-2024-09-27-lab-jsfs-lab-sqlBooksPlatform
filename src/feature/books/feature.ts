import { createService } from "./service";
import { Db } from "../../app";
import { createRouter } from "./router";
import { AuthorService } from "./types";

export const createBookFeature = (db: Db, authorService: AuthorService) => {
  //seeda här. if env=on
  const service = createService(db, authorService);
  const router = createRouter(service);

  return {
    router,
  };
};
