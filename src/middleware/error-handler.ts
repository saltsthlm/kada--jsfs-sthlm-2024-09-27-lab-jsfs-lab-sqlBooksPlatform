import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
export function createErrorRequestHandler() {
  const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
    if (err instanceof ZodError) {
      res.status(400).json(err.errors);
    } else {
      next(err);
    }
  };
  return errorHandler;
}