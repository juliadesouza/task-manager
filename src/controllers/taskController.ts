import { Request, Response } from "express";
import { database } from "@/database/databse";
import { z } from "zod";
import { STATUS } from "@/utils/utils";
import { AppError } from "@/middlewares/error";

class TaskController {
  async create(request: Request, response: Response) {
    const statuses: string[] = Object.values(STATUS);

    const schema = z.object({
      title: z.string(),
      description: z.string().optional(),
      status: z.enum(["PENDING", "IN_PROGRESS", "COMPLETED"]),
      priority: z.enum(["HIGH", "MEDIUM", "LOW"]),
      assignedTo: z.string().uuid(),
      teamId: z.string().uuid(),
    });

    const { title, description, status, priority, assignedTo, teamId } =
      schema.parse(request.body);

    const userExist = await database.user.findFirst({
      where: { id: assignedTo },
    });

    if (!userExist) {
      throw new AppError("User not found", 404);
    }

    const teamExist = await database.team.findFirst({
      where: { id: teamId },
    });

    if (!teamExist) {
      throw new AppError("Team not found", 404);
    }

    const task = await database.task.create({
      data: { title, description, status, priority, assignedTo, teamId },
    });

    response.status(201).json(task);
  }

  async getTask(request: Request, response: Response) {
    const schema = z.object({
      id: z.string().uuid(),
    });

    const { id } = schema.parse(request.params);

    const task = await database.task.findUnique({ where: { id } });

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    response.status(200).json(task);
  }

  async update(request: Request, response: Response) {
    const querySchema = z.object({ id: z.string().uuid() });
    const bodySchema = z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      status: z.enum(["PENDING", "IN_PROGRESS", "COMPLETED"]).optional(),
      priority: z.enum(["HIGH", "MEDIUM", "LOW"]).optional(),
      assignedTo: z.string().uuid().optional(),
      teamId: z.string().uuid().optional(),
    });

    const { id } = querySchema.parse(request.params);
    const { title, description, status, priority, assignedTo, teamId } =
      bodySchema.parse(request.body);

    const task = await database.task.findFirst({ where: { id } });

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    if (assignedTo) {
      const userExist = await database.user.findFirst({
        where: { id: assignedTo },
      });

      if (!userExist) {
        throw new AppError("User not found", 404);
      }
    }

    if (teamId) {
      const teamExist = await database.team.findFirst({
        where: { id: teamId },
      });

      if (!teamExist) {
        throw new AppError("Team not found", 404);
      }
    }

    const newTask = await database.task.update({
      where: { id },
      data: { title, description, status, priority, assignedTo, teamId },
    });

    response.status(200).json(newTask);
  }

  async delete(request: Request, response: Response) {
    const schema = z.object({
      id: z.string().uuid(),
    });

    const { id } = schema.parse(request.params);

    const task = await database.task.findUnique({ where: { id } });

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    await database.task.delete({ where: { id } });

    response.status(200).json({});
  }
}

export { TaskController };
