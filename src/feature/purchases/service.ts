import { z } from "zod";
import { Db } from "../../app";

export const createService = (db: Db) => {
  return {
    async add(purchases: Purchases) {
      purchasesSchema.parse(purchases);
      const { buyer_id, book_id } = purchases;
      const query =
        "INSERT INTO purchases (buyer_id, book_id, purchase_date) values($1, $2, NOW())";
      await db.query(query, [buyer_id, book_id]);
    },
  };
};

export const purchasesSchema = z.object({
  buyer_id: z.number(),
  book_id: z.number(),
});

type Purchases = z.infer<typeof purchasesSchema>;
export type PurchasesService = ReturnType<typeof createPurchasesService>;
