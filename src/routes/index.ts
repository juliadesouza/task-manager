import { Router } from "express";
import { loginRoutes } from "./loginRoutes";
import { userRoutes } from "./userRoutes";
import { teamRoutes } from "./teamRoutes";

const routes = Router();

routes.use("/login", loginRoutes);
routes.use("/users", userRoutes);
routes.use("/teams", teamRoutes);

export { routes };
