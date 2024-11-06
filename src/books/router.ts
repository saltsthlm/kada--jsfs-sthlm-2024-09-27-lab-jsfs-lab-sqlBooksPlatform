import express from "express";
import { BookService } from "./service";

export const createBooksRouter = (service: BookService) => {
  const router = express.Router();
  router.get("/", async (req, res) => {
    const books = await service.getAll();
    res.status(200).json(books);
  });
  router.get("/:id", async (req, res) => {
    const book = await service.getById(req.params.id);
    res.status(200).json(book);
  });
  router.patch("/:id", async (req, res) => {
    const book = await service.patch(req.body, req.params.id);
    res.status(200).json(book);
  })
  return router;
};
