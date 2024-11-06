import express from "express"
export const createBooksRouter = (service: BookService) => {
    const router = express.Router()
    router.get("/", async (req, res) => {
        const books = await service.getAll()
        res.status(200).json(books.rows)
    });
    router.get("/:id", async (req, res) =>{
        const book = await service.getById(req.params.id)
        res.status(200).json(book.rows[0])
    });
    return router
}
