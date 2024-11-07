import { PurchasesService } from "./service";
import express from "express";

export const createPurchasesRouter = (service: PurchasesService) => {
  const router = express.Router();
  router.post("/", async (req, res) => {
    await service.add(req.body);
    res.status(201).json();
  });
  return router;
};
