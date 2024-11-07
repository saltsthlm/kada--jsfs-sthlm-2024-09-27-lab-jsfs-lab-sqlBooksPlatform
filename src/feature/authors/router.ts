import express from "express";
import { Service } from "./service";

export const createRouter = (service: Service) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const authors = await service.getAll();
    res.status(200).json(authors);
  });

  router.get("/:id", async (req, res) => {
    const author = await service.getById(req.params.id);
    res.status(200).json(author);
  });

  return router;
};
