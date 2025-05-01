import { Router } from "express";
import { TaskController } from "@/controllers/taskController";
import { authenticate } from "@/middlewares/authentication";
import { authorize, authorizeUserEditTask } from "@/middlewares/authorization";
import { ROLES } from "@/utils/utils";

const taskRouter = Router();
const taskController = new TaskController();

taskRouter.use(authenticate);
taskRouter.post("/", taskController.create);
taskRouter.get("/:id", taskController.getTask);
taskRouter.patch("/:id", authorizeUserEditTask, taskController.update);
taskRouter.delete("/:id", taskController.delete);
taskRouter.get("/", authorize([ROLES.admin]), taskController.getTasks);

export { taskRouter };
