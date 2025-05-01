import { UserController } from "@/controllers/userController";
import { authenticate } from "@/middlewares/authentication";
import { authorize } from "@/middlewares/authorization";
import { ROLES } from "@/utils/utils";
import { Router } from "express";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController.create);
userRoutes.get(
  "/",
  authenticate,
  authorize([ROLES.admin]),
  userController.getUsers
);

export { userRoutes };
