import { Router } from "express";
import { loginRoutes } from "./loginRoutes";
import { userRoutes } from "./userRoutes";
import { teamRoutes } from "./teamRoutes";
import { taskRouter } from "./taskRoutes";

const routes = Router();

routes.use("/login", loginRoutes);
routes.use("/users", userRoutes);
routes.use("/teams", teamRoutes);
routes.use("/tasks", taskRouter);

export { routes };
