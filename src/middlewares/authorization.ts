import { Request, Response, NextFunction } from "express";
import { AppError } from "./error";
import { database } from "@/database/databse";

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

async function authorizeUserViewTeamTasks(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    if (!request.user) {
      throw new AppError("User not found", 403);
    }

    const { id: userId } = request.user;
    const { id: teamId } = request.params;

    const userHasAccess = await database.teamMember.findFirst({
      where: {
        userId,
        teamId,
      },
    });

    if (!userHasAccess) {
      return next(new AppError("User not authorized", 403));
    }

    return next();
  } catch (error) {
    return next(
      new AppError("An error occurred while authorizing the user", 500)
    );
  }
}

async function authorizeUserEditTask(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    if (!request.user) {
      throw new AppError("User not found", 403);
    }

    const { id: userId, role } = request.user;
    const { id: taskId } = request.params;

    if (role === "ADMIN") {
      return next();
    }

    const userHasAccess = await database.task.findFirst({
      where: {
        id: taskId,
        assignedTo: userId,
      },
    });

    if (!userHasAccess) {
      return next(new AppError("User not authorized", 403));
    }

    return next();
  } catch (error) {
    return next(
      new AppError("An error occurred while authorizing the user", 500)
    );
  }
}

export { authorize, authorizeUserViewTeamTasks, authorizeUserEditTask };
