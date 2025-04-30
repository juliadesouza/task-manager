import { Router } from "express";
import { TeamController } from "@/controllers/teamController";
import { authorize } from "@/middlewares/authorization";
import { authenticate } from "@/middlewares/authentication";
import { ROLES } from "@/utils/utils";

const teamRoutes = Router();
const teamController = new TeamController();

teamRoutes.use(authenticate, authorize([ROLES.admin]));
teamRoutes.post("/", teamController.create);
teamRoutes.patch("/:id", teamController.update);
teamRoutes.post("/members", teamController.createTeamMember);
teamRoutes.delete("/members/:id", teamController.deleteTeamMember);

export { teamRoutes };
