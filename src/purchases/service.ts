import { PoolClient } from "pg";

const createPurchasesService = (db: PoolClient) => {
    return {
        async add (purchases: Purchases){
            const { buyer_id, book_id, purchases_id }
        }
    }
};
export const createBuyersService = (db: PoolClient) => {
    return {
        async add(buyer: Buyer){
            const {name, email } = buyer
            const query = "INSERT INTO buyers (name, email) values($1, $2)"
            await db.query(query, [name, email])
        }
    }
}