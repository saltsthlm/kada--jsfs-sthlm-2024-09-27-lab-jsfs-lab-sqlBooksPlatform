import { PoolClient } from "pg";
import { z } from "zod";

export const createPurchasesService = (db: PoolClient) => {
  return {
    async add(purchases: Purchases) {
      const { buyer_id, book_id, purchases_id } = purchases;
      const query =
        "INSERT INTO purchases (buyer_id, book_id, purchases_id) values($1, $2, $3)";
      await db.query(query, [buyer_id, book_id, purchases_id]);
    },
  };
};

export const purchasesSchema = z.object({
  buyer_id: z.number(),
  book_id: z.number(),
  purchases_id: z.number(),
});

type Purchases = z.infer<typeof purchasesSchema>;
export type PurchasesService = ReturnType<typeof createPurchasesService>;
