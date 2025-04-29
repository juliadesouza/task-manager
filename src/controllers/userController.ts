import { Request, Response } from "express";
import { z } from "zod";
import { database } from "@/database/databse";
import { AppError } from "@/middlewares/error";
import { hash } from "bcrypt";

class UserController {
  constructor() {
    this.create = this.create.bind(this);
  }
  async create(request: Request, response: Response): Promise<void> {
    const schema = z.object({
      name: z.string().trim().min(1),
      email: z.string().email(),
      password: z.string().min(6),
      role: z.enum(["MEMBER", "ADMIN"]).optional(),
    });

    const { name, email, password, role } = schema.parse(request.body);

    const isUserDuplicated = await database.user.findFirst({
      where: { email },
    });

    if (isUserDuplicated) {
      throw new AppError("User already exists.", 409);
    }

    const secretPassword = await hash(password, 8);
    const newUser = await database.user.create({
      data: { name, email, password: secretPassword, role },
    });

    const { password: _, ...data } = newUser;
    response.status(201).json(data);
  }
}

export { UserController };
