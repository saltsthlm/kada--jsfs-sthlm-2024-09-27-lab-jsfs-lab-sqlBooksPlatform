import { PoolClient } from "pg";
import { z } from "zod";

export const createService = (db: PoolClient) => {
  return {
    async add(buyer: Buyer) {
      const { name, email } = buyer;
      const query = "INSERT INTO buyers (name, email) values($1, $2)";
      await db.query(query, [name, email]);
    },
  };
};

export const buyerSchema = z.object({
  name: z.string(),
  email: z.string(),
});

type Buyer = z.infer<typeof buyerSchema>;
export type BuyerService = ReturnType<typeof createBuyersService>;
