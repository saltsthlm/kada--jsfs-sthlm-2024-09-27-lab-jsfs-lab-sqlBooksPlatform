import { PoolClient } from "pg";

export const createPurchasesFeature = (db: PoolClient) => 
    createPurchasesRouter(createPurchasesFeature(db))