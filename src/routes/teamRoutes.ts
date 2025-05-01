import { Router } from "express";
import { TeamController } from "@/controllers/teamController";
import {
  authorize,
  authorizeUserViewTeamTasks,
} from "@/middlewares/authorization";
import { authenticate } from "@/middlewares/authentication";
import { ROLES } from "@/utils/utils";

const teamRoutes = Router();
const teamController = new TeamController();

teamRoutes.get(
  "/:id/tasks",
  authenticate,
  authorizeUserViewTeamTasks,
  teamController.getTeamTasks
);
teamRoutes.use(authenticate, authorize([ROLES.admin]));
teamRoutes.post("/", teamController.create);
teamRoutes.get("/", teamController.getTeams);
teamRoutes.patch("/:id", teamController.update);
teamRoutes.post("/members", teamController.createTeamMember);
teamRoutes.delete("/members/:id", teamController.deleteTeamMember);

export { teamRoutes };
