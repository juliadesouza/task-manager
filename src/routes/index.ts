import { Router } from "express";
import { loginRoutes } from "./login-routes";
import { userRoutes } from "./user-routes";

const routes = Router();

routes.use("/login", loginRoutes);
routes.use("/users", userRoutes);

export { routes };
