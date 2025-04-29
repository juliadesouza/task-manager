import { Request, Response, NextFunction } from "express";
import { AppError } from "./error";
import { verify } from "jsonwebtoken";
import { authConfig } from "@/configs/auth";

interface TokenPayload {
  role: string;
  sub: string;
}

function authenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const auth = request.headers.authorization;

    if (!auth) {
      throw new AppError("User not authorized", 403);
    }

    const [, token] = auth.split(" ");

    const { sub: userId, role } = verify(
      token,
      authConfig.jwtSecret
    ) as TokenPayload;

    request.user = {
      id: userId,
      role,
    };

    return next();
  } catch (error) {
    return next(new AppError("Token invalid", 401));
  }
}

export { authenticate };
