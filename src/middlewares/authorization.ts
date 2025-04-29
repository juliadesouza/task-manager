import { Request, Response, NextFunction } from "express";
import { AppError } from "./error";

function authorize(role: string[]) {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.user) {
      return next(new AppError("User not found", 403));
    }

    const userRole = request.user.role;

    if (!role.includes(userRole)) {
      return next(new AppError("User not authorized", 403));
    }

    next();
  };
}

export { authorize };
