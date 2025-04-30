import { Router } from "express";
import { TaskController } from "@/controllers/taskController";
import { authenticate } from "@/middlewares/authentication";

const taskRouter = Router();
const taskController = new TaskController();

taskRouter.use(authenticate);
taskRouter.post("/", taskController.create);
taskRouter.get("/:id", taskController.getTask);
taskRouter.patch("/:id", taskController.update);
taskRouter.delete("/:id", taskController.delete);

export { taskRouter };
