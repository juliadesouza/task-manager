import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export class AppError {
  message: String;
  code: number;

  constructor(message: string, code: number = 400) {
    this.message = message;
    this.code = code;
  }
}

export function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (error instanceof AppError) {
    res.status(error.code).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    res
      .status(400)
      .json({ message: "Validation error", issues: error.format() });
  }

  // Importante chamar o próximo middleware de erro, caso exista
  res.status(500).json({ message: error.message });
}
