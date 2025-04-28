import { Request, Response } from "express";
import { database } from "@/database/databse";
import { z } from "zod";
import { AppError } from "@/middlewares/error";
import { compare } from "bcrypt";
import { authConfig } from "@/configs/auth";
import { sign } from "jsonwebtoken";

class LoginController {
  constructor() {
    this.create = this.create.bind(this);
  }

  async create(request: Request, response: Response): Promise<void> {
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { email, password } = schema.parse(request.body);

    const user = await database.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new AppError("User not found.", 404);
    }

    const validPassword = await compare(password, user.password);
    if (!validPassword) {
      throw new AppError("User not authorized.", 401);
    }

    const { jwtSecret, expiresIn } = authConfig;

    // criar um JSON Web Token (JWT)
    const token = sign({ role: user.role ?? "member" }, jwtSecret, {
      expiresIn,
      subject: user.id,
    });

    const { password: _, ...data } = user;
    response.status(200).json({
      token,
      ...data,
    });
  }
}

export { LoginController };
