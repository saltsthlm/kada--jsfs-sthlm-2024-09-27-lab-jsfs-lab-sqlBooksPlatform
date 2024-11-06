import express from "express";
import { BuyerService } from "./service";

export const createBuyersRouter = (service: BuyerService) => {
  const router = express.Router();
  router.post("/", async (req, res) => {
    await service.add(req.body);
    res.status(201).json();
  });
  return router;
};
