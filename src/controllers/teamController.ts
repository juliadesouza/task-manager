import { Request, Response } from "express";
import { database } from "@/database/databse";
import { z } from "zod";
import { AppError } from "@/middlewares/error";

class TeamController {
  constructor() {
    this.create = this.create.bind(this);
  }

  async create(request: Request, response: Response): Promise<void> {
    const schema = z.object({
      name: z.string().min(5),
      description: z.string(),
    });

    const { name, description } = schema.parse(request.body);

    const isTeamDuplicated = await database.team.findFirst({ where: { name } });

    if (isTeamDuplicated) {
      throw new AppError("Team already exists.", 409);
    }

    const newTeam = await database.team.create({ data: { name, description } });
    response.status(201).json(newTeam);
  }

  async update(request: Request, response: Response): Promise<void> {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const bodySchema = z.object({
      description: z.string(),
    });

    const { id } = paramsSchema.parse(request.params);
    const { description } = bodySchema.parse(request.body);

    await database.team.update({ where: { id }, data: { description } });
    response.json({});
  }
}

export { TeamController };
