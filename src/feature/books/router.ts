import express from "express";
import { BookService } from "./service";

export const createRouter = (service: BookService) => {
  const router = express.Router();
  router.get("/", async (req, res) => {
    const books = await service.getAll();
    res.status(200).json(books);
  });
  router.get("/:id", async (req, res) => {
    const book = await service.getById(req.params.id);
    res.status(200).json(book);
  });
  router.post("/", async (req, res) => {
    const result = await service.add(req.body);
    res.status(201).json();
  });
  router.patch("/:id", async (req, res) => {
    const book = await service.patch(req.body, req.params.id);
    res.status(200).json(book);
  });
  router.delete("/:id", async (req, res) => {
    await service.delete(req.params.id);
    res.status(204).json();
  });
  return router;
};
