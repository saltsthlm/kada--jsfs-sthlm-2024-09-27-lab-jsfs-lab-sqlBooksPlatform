import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
export function createErrorRequestHandler() {
  const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
    if (err instanceof ZodError) {
      res.status(400).json(err.errors);
    }
    if (err.message === "MMM") {
      res.status(409).json("FEL IGEN?");
    } 
    else {
      next(err);
    }
  };
  return errorHandler;
}